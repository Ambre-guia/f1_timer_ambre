const express = require("express");
const router = express.Router();
const timerController = require("../controllers/timerController");
const { authenticate } = require("../middleware/authMiddleware");

router.post(
  "/submit-reaction-time",
  authenticate,
  timerController.submitReactionTime
);
router.get(
  "/get-reaction-times/:userId",
  authenticate,
  timerController.getReactionTimes
);

module.exports = router;
