const subunitiesService = require('../services/subunities');

exports.getAll = (req, res, next) => {
  subunitiesService
    .getAll(req.params.id)
    .then(subunity => res.send(subunity))
    .catch(next);
}