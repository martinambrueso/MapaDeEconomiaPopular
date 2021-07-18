const entitiesService = require('../services/entities');

exports.createOne = (req, res, next) => {
  if(req.body){
    entitiesService
    .createOne(req.body)
    .then(entity => res.send(entity))
    .catch(next);
  } else {
    res.status(400).send({message: 'Faltan uno o mas parametros.'})
  }
}