const { healthCheck } = require('./controllers/healthCheck');
const businessAreaController = require('./controllers/businessAreas');
const categoriesController = require('./controllers/categories');
const subcategoriesController = require('./controllers/subcategories');
const entitiesController = require('./controllers/entities.js');

exports.init = app => {
  path = ''

  app.get('/api/v2/health', healthCheck);

  app.get('/api/v2/business-area', businessAreaController.getAll);
  app.get('/api/v2/categories', categoriesController.getAll);
  app.get('/api/v2/categories/:id/subcategories', subcategoriesController.getAll);
  app.post('/api/v2/entities', entitiesController.createOne);
};
