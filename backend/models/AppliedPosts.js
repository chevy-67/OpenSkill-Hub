const mongoose = require("mongoose");

const Schema = mongoose.Schema

const AppliedPostsSchema = new Schema({
    post_id : {type:String,required:true,unique:true},
    username : {type:String,required:true},
    date : {type:String},
    time : {type:String}
},{timestamps:true})

const model = mongoose.model('Applied_Posts',AppliedPostsSchema)
module.exports = model