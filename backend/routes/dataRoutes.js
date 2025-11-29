const PostData = require('../models/PostData.js')
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

module.exports = router