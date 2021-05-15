const Entity = require('../models').entities;
const errorHandler = require('./errorHandler');

exports.createOne = entityData => Entity.create(entityData).catch(errorHandler.notifyErrorDatabase);
