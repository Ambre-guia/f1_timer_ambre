const Timer = require('../models/Timer');

exports.createTimer = async (req, res) => {
  try {
    const { user_id, time } = req.body;
    const newTimer = new Timer({ user_id: user_id, time: time });
    await newTimer.save();
    res.status(201).json(newTimer);
  } catch (error) {
    console.error('Erreur lors de la création du timer', error);
    res.status(500).json({ error: 'Erreur de serveur' });
  }
};

exports.getBestTime = async (req, res) => {
  try {
    const bestTime = await Timer.find({ user_id: req.params.userId })
      .sort({ time: 1 })
      .limit(1);
    res.json(bestTime[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
