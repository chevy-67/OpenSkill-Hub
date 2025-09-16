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

module.exports = router