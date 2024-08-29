const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/timer', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// Define routes
const userRoute = require('./routes/userRoute');
const timerRoute = require('./routes/timerRoute');

app.use('/api', userRoute);
app.use('/api', timerRoute);

// Swagger setup (if applicable)
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swaggerConfig');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
