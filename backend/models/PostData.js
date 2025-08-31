const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title : {type:String,required:true},
    description : {type:String,required:true},
    username : {type:String,required:true},
    date : {type:String},
    time : {type:String}
})

const model = mongoose.model('Post_Data',PostSchema)
module.exports = model