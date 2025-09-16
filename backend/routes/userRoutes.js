const express = require("express");
const jwt = require('jsonwebtoken')
const NewUser = require("../models/User");
const PostData = require("../models/PostData")

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    let user = await NewUser.findOne({ username });

    if (!user) {
      return res.status(404).json({ error: "User does not exist" });
    }
    if (password != user.password) {
      return res.status(400).json({ error: "Wrong password"});
    }
    res.status(200).json({message:"Login succesful"});
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
    const newUser = new NewUser({ name, username, email, password});
    await newUser.save()
    res.status(201).json({ message: "Account created succesfullt" });
  } catch (er) {
    return res.status(500).json({error:er.message})
  }
});

router.post("/create_post",async (req,res)=>{
  try{
    const {title,description,username} = req.body
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
