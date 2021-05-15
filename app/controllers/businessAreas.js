const businessAreaService = require('../services/businessAreas');

exports.getAll = (req, res, next) =>
  businessAreaService
    .getAll()
    .then(businessArea => res.send(businessArea))
    .catch(next);
