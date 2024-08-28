const Timer = require("../models/Timer");

exports.submitReactionTime = async (req, res) => {
  const { time } = req.body;
  const userId = req.user.userId;

  try {
    const timer = new Timer({ user_id: userId, time });
    await timer.save();
    res.status(201).json({ message: "Reaction time recorded successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

exports.getReactionTimes = async (req, res) => {
  const { userId } = req.params;

  try {
    const reactionTimes = await Timer.find({ user_id: userId }).sort({
      date: -1,
    });
    res.json(reactionTimes);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
