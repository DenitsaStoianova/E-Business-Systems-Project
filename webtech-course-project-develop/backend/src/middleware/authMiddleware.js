const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  if (!token) {
    res.status(401).json({ result: false, message: 'Authorization failed' });
  } else {
    try {
      jwt.verify(token, process.env.TOKEN_SECRET);
      next();
    } catch (error) {
      res.status(401).json({ result: false, message: 'Your session has expired' });
    }
  }
};
