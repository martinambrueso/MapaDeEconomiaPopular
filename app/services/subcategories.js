const Subcategory = require('../models').subcategories;
const errorHandler = require('./errorHandler');

exports.getAll = categoryId =>
  Subcategory.findAll({ where: { categoryId } }).catch(errorHandler.notifyErrorDatabase);
