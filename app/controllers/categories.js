const categoriesService = require('../services/categories');

exports.getAll = (req, res, next) => {
  categoriesService
    .getAll()
    .then(categories => res.send(categories))
    .catch(next);
}
  