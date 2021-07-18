const Unity = require('../models').unities;
const errorHandler = require('./errorHandler');

exports.getAll = () => Unity.findAll().catch(errorHandler.notifyErrorDatabase);
