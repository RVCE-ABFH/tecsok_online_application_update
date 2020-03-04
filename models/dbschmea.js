var mongoose=require("mongoose");

var registerSchema=new mongoose.Schema({
    _id:Number,
    name:String,
    phone:Number,
    date:String,
    email:String,
    education:String,
    post:String
});



module.exports=mongoose.model('info',registerSchema);