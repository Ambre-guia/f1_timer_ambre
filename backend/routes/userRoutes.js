const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/dashboard/:userID', userController.test);

module.exports = router;
