const entitiesService = require('../services/entities');

exports.createOne = (req, res, next) =>
  entitiesService
    .createOne(req.body)
    .then(entity => res.send(entity))
    .catch(next);
