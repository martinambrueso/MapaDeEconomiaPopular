const entitiesService = require('../services/entities');

exports.createOne = (req, res, next) => {
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
  
  if(req.body){
    entitiesService
    .createOne(req.body)
    .then(entity => res.send(entity))
    .catch(next);
  } else {
    res.status(400).send({message: 'Faltan uno o mas parametros.'})
  }
}