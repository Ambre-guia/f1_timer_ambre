const User = require('../models/User');

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.json({ user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
