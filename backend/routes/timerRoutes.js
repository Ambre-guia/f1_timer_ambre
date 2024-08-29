const express = require('express');
const router = express.Router();
const timerController = require('../controllers/timerController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/create', authMiddleware, timerController.createTimer);
router.get('/best-time', authMiddleware, timerController.getBestTime);

module.exports = router;
