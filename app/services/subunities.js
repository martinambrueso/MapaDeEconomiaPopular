const Subunities = require('../models').subunities;
const errorHandler = require('./errorHandler');

exports.getAll = unityId =>
Subunities.findAll({ where: { unityId } }).catch(errorHandler.notifyErrorDatabase);
