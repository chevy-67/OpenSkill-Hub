const express = require("express");
const jwt = require('jsonwebtoken')
const NewUser = require("../models/User");
const PostData = require("../models/PostData")
const bcrypt = require('bcrypt')

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    let user = await NewUser.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: "User does not exist" });
    }

    let match = await bcrypt.compare(password,user.password)
    if (!match) {
      return res.status(400).json({ error: "Wrong password"});
    }
    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    res.status(200).json({ message: "Login succesful", token });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

router.post("/signup", async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    let existUser = await NewUser.findOne({ email });
    let existUsername = await NewUser.findOne({ username });
    if (existUser) {
      return res.status(400).json({ message: "Email is already in use" });
    }
    if (existUsername) {
      return res.status(400).json({ message: "Username not available" });
    }
    const salt = 10
    let hashedPass = await bcrypt.hash(password,salt)

    const newUser = new NewUser({ name, username, email, password:hashedPass});
    await newUser.save()
    res.status(201).json({ message: "Account created succesfullt" });
  } catch (er) {
    return res.status(500).json({message:er.message})
  }
});

router.post("/create_post",async (req,res)=>{
  try{
    const authorize = req.headers['authorization']
    const token = authorize && authorize.split(' ')[1]
    if(!token){
      return res.status(401).json({message:'Not authorized'})
    }
    const verification = jwt.verify(token,process.env.JWT_SECRETE)

    if(!verification){
      return res.status(401).json({message:'No valid token...'})
    }
    const {title,description} = req.body
    const username = verification.username
    const now = new Date();
    const date = now.toISOString().split('T')[0]
    const time = now.toTimeString().split(' ')[0]
    const newPost = new PostData({ title, description, username, date, time });
    await newPost.save()
    return res.status(201).json({message:'Successfully data saved'})
  }
  catch(err){
    console.log(err)
    return res.status(500).json({ error: err.message });
  }
})

module.exports = router;
