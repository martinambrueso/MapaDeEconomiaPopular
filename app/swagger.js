const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
      version: "1.0.0",
      title: "Mapa de economia popular",
      description: "Documentacion de endpoints, API para consumo de geonode."
  },
  host: "localhost:3000",
  basePath: "/",
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],

  definitions: {
      User: {
          user: "string",
          pass: "string"
      },
      UserSignUp: {
        user: "string",
        pass: "string",
        admin: false
    },
    Entities: {
        user: "string",
        pass: "string",
        email: "string"
    }
  }
}

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app/routes.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
