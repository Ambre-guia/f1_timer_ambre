const User = require('../models/User');

exports.test = async (req, res) => {
  console.log('là');
  try {
    const user = await User.findById(req.params.userId);
    //const user = await User.findOne({ email });
    console.log(user);
    res.json({ user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
