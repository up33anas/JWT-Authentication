const User = require("../models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcrypt");

// ================= SIGNUP =================
module.exports.SignUp = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    // Check duplicate
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "User with this email already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      email,
      username,
      password: hashedPassword,
    });

    // Create JWT
    const token = createSecretToken(user._id);

    // Send cookie
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: true,
    });

    return res
      .status(201)
      .json({ message: "User created successfully", success: true, user });
  } catch (error) {
    console.error("SignUp error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// ================= LOGIN =================
module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Create JWT
    const token = createSecretToken(user._id);

    // Send cookie
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: true,
    });

    return res
      .status(200)
      .json({ message: "Login successful", success: true, user });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
