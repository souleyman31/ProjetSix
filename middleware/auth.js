const jwt = require("jsonwebtoken");
require("dotenv/config");
//auth.js
const token_key = process.env.TOKEN_KEY;

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, `${token_key}`);
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw "Invalid user ID";
    } else {
      req.userFromToken = userId;
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error("Invalid request!")
    });
  }
};
