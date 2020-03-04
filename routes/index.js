var express=require("express");
var Info=require("../models/dbschmea");
BodyParser= require("body-parser");
var mongoose=require("mongoose");
var number;



var app=express.Router();
app.use(BodyParser.urlencoded({extended:true}))
app.get("/",function(req,res)
{
    res.render("home.ejs");

});
app.get("/registration",function(req,res)
{

    res.render("register.ejs");
});

app.get("/omr",function(req,res)
{
    res.send("hello");
});

app.get("/ack",function(req,res)
{
    res.render("ack.ejs");
});

app.get("/registration/preview",function(req,res)
{
    Info.find({_id:number},function(err,info)
    { 
        if(err)
            console.log(err)
        else
        res.render("preview.ejs",{info:info[0]})

    });
});
var i=2020000000;
app.post("/registration",async function(req,res)
{ 
    i=i+1;
        Info.create({_id:i
            ,name:req.body.info.name,
            phone:req.body.info.phone,
            date:req.body.info.date,
            email:req.body.info.email,
            education:req.body.info.education,
            post:req.body.info.post},function(err)
        { 
            if(err)
            {
                res.redirect("/home/registration");
                console.log(err);
            }
                
            else
            {number=i;
                res.redirect("/home/registration/preview")
            }
                
                
                
                console.log(number)
            
            
            
        })
});

app.post("/ack",function(req,res)
{
    Info.find({phone:req.body.number,date:req.body.date},function(err,info)
    {   console.log(req.body.app)
        if(err)
            res.redirect("/home/ack");
        else
        {
            res.render("download.ejs",{info:info[0]});
        }
    })
})
module.exports=app;
