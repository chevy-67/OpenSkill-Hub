const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    post_id : {type:String,required:true,unique:true},
    title : {type:String,required:true},
    description : {type:String,required:true},
    username : {type:String,required:true},
    date : {type:String},
    time : {type:String}
},{timestamps:true})

const model = mongoose.model('Post_Data',PostSchema)
module.exports = model