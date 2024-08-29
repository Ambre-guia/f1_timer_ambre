const jwt = require('jsonwebtoken');
require('dotenv').config();
// Removed the unused User model import

exports.verifyToken = async (req, res, next) => {
  try {
    const token = req.headers['authorization'];
    const jwtKey = process.env.JWT_KEY; // Ensure JWT_KEY is set in your .env file

    if (!jwtKey) {
      throw new Error('JWT key is not defined in environment variables.');
    }

    if (token) {
      const payload = await new Promise((resolve, reject) => {
        jwt.verify(token, jwtKey, (error, decoded) => {
          if (error) {
            reject(error);
          } else {
            resolve(decoded);
          }
        });
      });

      req.user = payload;
      next();
    } else {
      res.status(403).json({ message: 'Accès interdit: token manquant' });
    }
  } catch (error) {
    console.error(error);
    res.status(403).json({ message: 'Accès interdit: token invalide' });
  }
};
