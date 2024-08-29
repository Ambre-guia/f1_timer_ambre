module.exports = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'F1 Timer API',
      version: '1.0.0',
      description: 'API for F1 Timer application',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
  },
  apis: ['./routes/*.js'],
};
