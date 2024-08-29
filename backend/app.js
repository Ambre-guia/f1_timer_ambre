// server.js
const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swaggerConfig'); // Ensure this path matches your project structure

const app = express();
const port = 3001;

// Middleware to parse URL-encoded and JSON request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/timer', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Import and use routes
const userRoute = require('./routes/userRoute');
const timerRoute = require('./routes/timerRoute');

app.use('/users', userRoute); // Organize routes under appropriate paths
app.use('/timers', timerRoute);

// Swagger UI setup for API documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start the server
app.listen(port, () => {
  console.log(`F1StartTimer app listening on port ${port}`);
  console.log(`Swagger Docs available at http://localhost:${port}/api-docs`);
});
