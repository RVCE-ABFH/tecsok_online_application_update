var express=require("express");
var app=express.Router();

app.get("/register",function(req,res)
{
    res.render("registration.ejs");
});

app.get("/login",function(req,res)
	{
		res.render("login.ejs");
	});
module.exports=app;
