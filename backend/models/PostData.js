const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    title : {type:String,required:true},
    description : {type:String,required:true},
    username : {type:String,required:true},
    dateTime : {type:Date}
})

const model = mongoose.model('Post_Data',PostSchema)
module.exports = model