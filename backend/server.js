const express = require('express');
const mongoose = require('mongoose');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const timerRoutes = require('./routes/timerRoutes');

const app = express();
const dotenv = require('dotenv');

dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Swagger setup
const swaggerSpec = swaggerJsdoc(require('./config/swagger'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Configuration CORS
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    optionsuccessstatus: 200,
  })
);

// MongoDB connection
mongoose
  .connect('mongodb://localhost:27017/f1timer', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/timers', timerRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
