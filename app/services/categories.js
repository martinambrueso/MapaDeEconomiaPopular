const Category = require('../models').categories;
const errorHandler = require('./errorHandler');

exports.getAll = () => Category.findAll().catch(errorHandler.notifyErrorDatabase);
