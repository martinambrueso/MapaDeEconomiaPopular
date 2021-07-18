const unityService = require('../services/unities');

exports.getAll = (req, res, next) => {
  unityService
    .getAll()
    .then(unity => res.send(unity))
    .catch(next);
}
  