const express = require('express');
const app = express.Router();
const https = require('https');
const qs = require('querystring');
const checksum_lib = require('../models/checksum');
const port=5000;
var PaytmConfig = {
	mid: "BACSyb72631279595265",
	key: "WU1xdWF6nvqFCFTQ",
	website: "WEBSTAGING"
}
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const User = require('../models/Users');

app.use(express.json());
// Welcome Page
app.get('/home', forwardAuthenticated, (req, res) => res.render('home'));
app.use(express.static(__dirname + '/public'));
app.get("/:name/verify",function(req,res)
{
  
  User.findOneAndUpdate({verify_id:req.query.id},{verify:true},function(err,user)
  {
    if(err)
      console.log(err);
    res.render("verified");
  });


});

// Dashboard
app.get('/:id/dashboard',ensureAuthenticated,function(req,res)
{var x=req.params.id;
  User.findOne({username:x},function(err,user)
  {
    if(err)
      console.log(err);
    else
      res.render("dashboard",{user:user});

  });

  app.get("/:id",function(req,res)
  {
    res.redirect("/:id/dashboard");
  });


});

app.get('/:id/profile',ensureAuthenticated,function(req,res)
{var x=req.params.id;
  User.findOne({username:x},function(err,user)
  {
    if(err)
      console.log(err);
    else
      res.render("profile",{user:user});

  });


});

app.get('/:id/View',ensureAuthenticated,function(req,res)
{var x=req.params.id;
  User.findOne({username:x},function(err,user)
  {
    if(err)
      console.log(err);
    else
      res.render("View",{user:user});

  });


});
app.get('/:id/online_application',ensureAuthenticated,function(req,res)
{var x=req.params.id;
  User.findOne({username:x},function(err,user)
  {
    if(err)
      console.log(err);
    else
      res.render("Online",{user:user});

  });


}
);
app.get('/:id/next_online_application',ensureAuthenticated,function(req,res)
{var x=req.params.id;
  User.findOne({username:x},function(err,user)
  {
    if(err)
      console.log(err);
    else
      res.render("NextOnline",{user:user});

  });


}
);


app.get('/:id/profile/address',ensureAuthenticated,function(req,res)
{var x=req.params.id;
  User.findOne({username:x},function(err,user)
  {
    if(err)
      console.log(err);
    else
      res.render("address",{user:user});

  });


});
app.get('/:id/profile/details',ensureAuthenticated,function(req,res)
{var x=req.params.id;
  User.findOne({username:x},function(err,user)
  {
    if(err)
      console.log(err);
    else
      res.render("details",{user:user});

  });


});
app.get('/:id/profile/education',ensureAuthenticated,function(req,res)
{var x=req.params.id;
  User.findOne({username:x},function(err,user)
  {
    if(err)
      console.log(err);
    else
      res.render("education",{user:user});

  });


});
app.get('/:id/profile/work',ensureAuthenticated,function(req,res)
{var x=req.params.id;
  User.findOne({username:x},function(err,user)
  {
    if(err)
      console.log(err);
    else
      res.render("work",{user:user});

  });


});
app.get('/:id/profile/photo',ensureAuthenticated,function(req,res)
{var x=req.params.id;
  User.findOne({username:x},function(err,user)
  {
    if(err)
      console.log(err);
    else
      res.render("photo",{user:user});

  });


});
app.get('/:id/profile/documents',ensureAuthenticated,function(req,res)
{var x=req.params.id;
  User.findOne({username:x},function(err,user)
  {
    if(err)
      console.log(err);
    else
      res.render("document",{user:user});

  });


});

app.get('/:id/application',ensureAuthenticated,function(req,res)
{var x=req.params.id;
  User.findOne({username:x},function(err,user)
  {
    if(err)
      console.log(err);
    else
      res.render("application",{user:user});

  });


});

app.get('/:id/request',ensureAuthenticated,function(req,res)
{var x=req.params.id;
  User.findOne({username:x},function(err,user)
  {
    if(err)
      console.log(err);
    else
      res.render("request",{user:user});

  });


});

module.exports = app;

