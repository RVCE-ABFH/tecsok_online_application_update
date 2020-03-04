var express=require("express"),
    app=express();
    mongoose=require("mongoose");
    
app.use(express.static(__dirname + '/public'));
mongoose.connect("mongodb+srv://harish:8762448499@cluster0-rgopw.mongodb.net/test?retryWrites=true&w=majority",{ useNewUrlParser: true ,useUnifiedTopology: true});



app.get("/",function(req,res)
{
    res.redirect("/home");
});

app.use("/home",require("./routes/index"));
app.use("/user",require("./routes/users"));
app.listen(5000,function()
{
    console.log("server started at http://localhost:3000")
});
