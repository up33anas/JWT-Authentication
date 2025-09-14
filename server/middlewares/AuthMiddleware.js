const User = require("../models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

// Verify the user for home form
module.exports.userVerification = (req, res) => {
  const token = req.cookies.token; // Extract the token
  if (!token) {
    return res.status(409).json({ status: false });
  }

  // Verify the token to check if the user has access to the route
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    }

    const user = await User.findById(data.id);

    if (user) {
      return res.json({ status: true, user: user.username });
    } else return res.json({ status: false });
  });
};
