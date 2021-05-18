const jwt = require('jsonwebtoken');
const crypto = require('../utils/CryptoJS')

const user = require('../models').users;

//------------------------------------------- AUXILIARY FUNCTIONS -----------------------------------//

//Get user from database
function getUserFromDB (usr) {
    return new Promise((resolve) => {
        user.findAll({ where: { user: usr } })
        .then((result) =>  {
            if(result) {
                resolve(result);
            } else {
                console.log('Schema does not exist!');
            }
        })
        .catch(err => {
            console.log(err.message || "Some error occurred while retrieving data.")
        });
    })
}

//Verify if credentials match witch hash
function verifyCredentials (user, pass) {
    return new Promise(async (resolve) => {
        const userResult = await getUserFromDB(user);
        if (userResult[0]) {
            if(crypto.compare(pass, userResult[0].dataValues.pass)) {
                resolve(true);
            } else {
                resolve(false);
            }
        } else {
            resolve(false);
        }
    })
}

//------------------------------------------- END AUXILIARY FUNCTIONS -----------------------------------//

exports.login = async (req, res) => {
    /* #swagger.tags = ['User']
        #swagger.description = 'Endpoint para adicionar um usuário.' */

    /* #swagger.parameters['newUser'] = {
            in: 'body',
            description: 'Informações do usuário.',
            required: true,
            type: 'object',
            schema: { $ref: "#/definitions/User" }
    } */
    const {user, pass, uid, email} = req.body;
    if(await verifyCredentials(user, pass)) {
        const token = jwt.sign({ user, uid, email }, process.env.SECRET , { expiresIn: 120 });
        res.json({token, expire: '120'});
    } else {
        res.send({error: 'Credentials not valid'})
    }
}

exports.signUp = (req, res) => {
    /* #swagger.tags = ['User']
        #swagger.description = 'Endpoint para adicionar um usuário.' */

    /* #swagger.parameters['newUser'] = {
            in: 'body',
            description: 'Informações do usuário.',
            required: true,
            type: 'object',
            schema: { $ref: "#/definitions/UserSignUp" }
    }
    */
    if(req.body.user && req.body.pass) {
        user.create({
            user: req.body.user,
            pass: crypto.encryptWithAES(req.body.pass),
            admin: req.body.admin,
            createdAt: (new Date()),
            updatedAt: (new Date())
        })
        .then((result) =>  {
            if(result) {
                res.status(200).send({message: 'User created succesfull.'});
            } else {
                res.status(404).send({ text: 'Schema does not exist!'});
            }
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while creating data."
            });
        })
    } else {
        res.status(400).send({message: 'One or more params are missing'});
    }
}