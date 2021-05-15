const { healthCheck } = require('./controllers/healthCheck');
const businessAreaController = require('./controllers/businessAreas');
const categoriesController = require('./controllers/categories');
const subcategoriesController = require('./controllers/subcategories');
const entitiesController = require('./controllers/entities.js');

exports.init = app => {
  path = '/api/v2'

  app.get(path + '/health', healthCheck);

  app.get(path + '/business-area', businessAreaController.getAll);
  app.get(path + '/categories', categoriesController.getAll);
  app.get(path + '/categories/:id/subcategories', subcategoriesController.getAll);
  app.post(path + '/entities', entitiesController.createOne);
};
