const categoriesService = require('../services/categories');

exports.getAll = (req, res, next) => {
  /* #swagger.tags = ['Main']
        #swagger.description = 'Endpoint para adicionar um usuário.' */

  /* #swagger.parameters['Bearer'] = {
          name: 'authorization',
          in: 'header',
          description: 'Bearer + token.',
          required: true,
          type: 'string',
          schema: { $ref: "#/definitions/UserSignUp" }
  } */
  categoriesService
    .getAll()
    .then(categories => res.send(categories))
    .catch(next);
}
  