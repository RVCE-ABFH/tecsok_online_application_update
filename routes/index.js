const express = require('express');
const app = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
const User = require('../models/Users');
// Welcome Page
app.get('/home', forwardAuthenticated, (req, res) => res.render('home'));
app.use(express.static(__dirname + '/public'));
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
