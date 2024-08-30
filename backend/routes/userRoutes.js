const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/dashboard/:userId', userController.test);

module.exports = router;
