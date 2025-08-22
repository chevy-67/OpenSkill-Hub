const express = require("express");
const User = require("../models/User");

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    let user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: "User not exist" });
    }
    if (password != user.password) {
      return res.status(400).json({ error: "Wrong password"});
    }
    res.status(200).json("Login succesfull", user);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

router.post("/signup", async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    let existUser = await User.findOne({ email });
    let existUsername = await User.findOne({ username });
    if (existUser) {
      return res.status(400).json({ message: "Email is already in use" });
    }
    if (existUsername) {
      return res.status(400).json({ message: "Username not available" });
    }
    const newUser = new User({ name, username, email, password});
    await newUser.save()
    res.status(201).json({ message: "Account created succesfullt" });
  } catch (er) {
    return res.status(500).json({ error: er.message });
  }
});

module.exports = router;
