const PostData = require('../models/PostData.js')
const AppliedPosts = require('../models/AppliedPosts.js')
const express = require('express')

const router = express.Router()

router.get('/getpost',async (req,res)=>{
  try{
    const data = await PostData.find().sort({createdAt:-1})
    res.json(data)
  }
  catch(err){
    res.status(500).json({error:"Server error"})
  }
})

router.get('/getpost/:id', async(req,res)=>{
  try{
    const {id} = req.params
    const post = await PostData.findOne({_id:id})
    if(!post){
      res.status(404).json({message : "Post not found"})
    }
    res.json(post)
  }
  catch(err){
    res.status(500).json({error:"Server error"})
  }
})

router.post('/applypost',async(req,res)=>{
  try{
    const {post_id,username,date,time} = req.body
    const alreadyApplied = await AppliedPosts.findOne({post_id:post_id,username:username})
    if(alreadyApplied){
      return res.status(400).json({message:"Already applied for this team"})
    }
    const newAppliedPost = new AppliedPosts({post_id:post_id,username:username,date:date,time:time})
    await newAppliedPost.save()
    res.status(201).json({message:"Applied for the team"})
  }
  catch(err){
    res.status(500).json({error:"Server error"})
  }
})

module.exports = router