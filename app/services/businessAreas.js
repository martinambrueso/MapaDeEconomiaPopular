const BusinessArea = require('../models').businessAreas;
const errorHandler = require('./errorHandler');

exports.getAll = () => BusinessArea.findAll().catch(errorHandler.notifyErrorDatabase);
