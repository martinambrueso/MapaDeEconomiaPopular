const jwt = require('jsonwebtoken');
const jwt_decode = require('jwt-decode');
const user = require('../models').users;

exports.isAuthenticated = (req, res, next) => {
    const bearerHeader = req.headers["authorization"];
	console.log(bearerHeader)
	
	if(typeof bearerHeader !== 'undefined') {
		const bearer = bearerHeader.split(" ");
		const bearerToken = bearer[1];
		req.token = bearerToken;
		jwt.verify(req.token, process.env.SECRET, (err, data) => {
			console.log(err)
			if(err) {
				res.status(401).send({ message: "Token not match" });
			} else {
				next();
			}
		});
	} else {
		res.status(403).send({ error: "Token is required" });
	}
}

exports.isAuthorized = (req, res, next) => {
	const jwt = jwt_decode(req.token)
    if(jwt) {
		user.findAll({ where: { user: jwt.user } })
        .then((result) =>  {
            if(result[0] && result[0].admin === true) {
                next()
            } else {
                res.status(403).send({ message: "Unauthorized" });
            }
        })
        .catch(err => {
			res.status(500).send({ message: "Internal error" });
            console.log(err.message || "Some error occurred while retrieving data.")
        });
	} else {
		res.status(400).send({ message: "Check parameters" });
	}
}