const { healthCheck } = require('./controllers/healthCheck');
const businessAreaController = require('./controllers/businessAreas');
const categoriesController = require('./controllers/categories');
const subcategoriesController = require('./controllers/subcategories');
const entitiesController = require('./controllers/entities.js');
const userController = require('./controllers/users');
const auth = require('./middlewares/auth')

exports.init = app => {
  app.get('/api/v2/health', healthCheck);

  app.get('/api/v2/business-area', auth.isAuthenticated, businessAreaController.getAll);
  app.get('/api/v2/categories', auth.isAuthenticated, categoriesController.getAll);
  app.get('/api/v2/categories/:id/subcategories', auth.isAuthenticated, subcategoriesController.getAll);
  app.post('/api/v2/entities', auth.isAuthenticated, auth.isAuthorized, entitiesController.createOne);

  //Signup
  app.post('/api/v2/signup', userController.signupService);
  //Login users
  app.post('/api/v2/login', userController.loginService);
};
