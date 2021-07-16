const { healthCheck } = require('./controllers/healthCheck');
const businessAreaController = require('./controllers/businessAreas');
const categoriesController = require('./controllers/categories');
const subcategoriesController = require('./controllers/subcategories');
const entitiesController = require('./controllers/entities.js');
const userController = require('./controllers/users');
const auth = require('./middlewares/auth')
const logger = require('./logger/audit_logger')

exports.init = app => {
  app.get('/api/v2/health', healthCheck);

  app.get('/api/v2/business-area', (req, res, next) => logger.loggerTransactions(req, res, next), auth.isAuthenticated, businessAreaController.getAll);
  app.get('/api/v2/categories', (req, res, next) => logger.loggerTransactions(req, res, next), auth.isAuthenticated, categoriesController.getAll);
  app.get('/api/v2/categories/:id/subcategories', (req, res, next) => logger.loggerTransactions(req, res, next), auth.isAuthenticated, subcategoriesController.getAll);
  app.post('/api/v2/entities', (req, res, next) => logger.loggerTransactions(req, res, next), auth.isAuthenticated, auth.isAuthorized, entitiesController.createOne);

  //Signup
  app.post('/api/v2/signup', (req, res, next) => logger.loggerTransactions(req, res, next), userController.signupService);
  //Login users
  app.post('/api/v2/login', (req, res, next) => logger.loggerTransactions(req, res, next), userController.loginService);
};
