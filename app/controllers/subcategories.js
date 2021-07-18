const subcategoriesService = require('../services/subcategories');

exports.getAll = (req, res, next) => {
  subcategoriesService
    .getAll(req.params.id)
    .then(subcategories => res.send(subcategories))
    .catch(next);
}