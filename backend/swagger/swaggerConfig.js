// swagger/swaggerConfig.js
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'F1 Reaction Timer API',
      version: '1.0.0',
      description: 'API documentation for the F1 Reaction Timer project',
    },
    servers: [
      {
        url: 'http://localhost:3001', // Update if the server URL or port changes
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./routes/*.js'], // Points to where your route files with Swagger annotations are
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
