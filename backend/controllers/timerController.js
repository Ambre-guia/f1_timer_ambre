const Timer = require("../models/Timer");

exports.createTimer = async (req, res) => {
  const { time } = req.body;
  try {
    const newTimer = new Timer({ user_id: req.user.id, time });
    await newTimer.save();
    res.status(201).json(newTimer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getBestTime = async (req, res) => {
  try {
    const bestTime = await Timer.find({ user_id: req.user.id })
      .sort({ time: 1 })
      .limit(1);
    res.json(bestTime[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
