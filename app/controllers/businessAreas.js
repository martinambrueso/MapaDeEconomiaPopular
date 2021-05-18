const businessAreaService = require('../services/businessAreas');

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
  businessAreaService
    .getAll()
    .then(businessArea => res.send(businessArea))
    .catch(next);
}
