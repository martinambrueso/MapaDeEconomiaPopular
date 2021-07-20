const entitiesService = require('../services/entities');

exports.createOne = (req, res, next) => {
  if(
    req.body.nombre &&
    req.body.nombre_antigua_firma &&
    req.body.fecha_recuperacion &&
    req.body.bienes_servicios &&
    req.body.forma_juridica &&
    req.body.fecha_inicio &&
    req.body.calle &&
    req.body.numero &&
    req.body.entre_calle1 &&
    req.body.entre_calle2 &&
    req.body.barrio &&
    req.body.categoryId &&
    req.body.subcategoryId &&
    req.body.businessAreaId &&
    req.body.unityId &&
    req.body.subunityId
  ){ // agregar validaciones cuando se definan los campos no nulos
    entitiesService
    .createOne(req.body)
    .then(entity => res.send(entity))
    .catch(next);
  } else {
    res.status(400).send({message: 'Faltan uno o mas parametros.'})
  }
}
