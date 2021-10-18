const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
  try {
    //1. destructure the token from fetch request
    const jwtToken = req.header("token");

    if (!jwtToken) {
      return res.status(403).json("User Not Authorized");
    }
    const payload = jwt.verify(jwtToken, process.env.PRIVATE_KEY);

    req.user = payload.user;

    next();
  } catch (error) {
    console.error(error.message);
    return res.status(403).json("Not Authorized");
  }
};
