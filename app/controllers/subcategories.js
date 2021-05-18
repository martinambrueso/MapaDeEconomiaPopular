const subcategoriesService = require('../services/subcategories');

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
  subcategoriesService
    .getAll(req.params.id)
    .then(subcategories => res.send(subcategories))
    .catch(next);
}