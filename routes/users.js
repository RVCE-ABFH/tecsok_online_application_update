const express = require('express');
const app = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const bodyParser=require("body-parser");
const verify= require('../config/verify');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var name;



//------------------------------------Authentication----------------------------//
// Load User model
const User = require('../models/Users');
const { forwardAuthenticated } = require('../config/auth');

// Login Page
app.get('/login', forwardAuthenticated, (req, res) => res.render('login'));

// Register Page
app.get('/register', forwardAuthenticated, (req, res) => res.render('registration'));

// Register
app.post('/register', (req, res) => {
  const { username, email,number, password, password2 } = req.body;
  let errors = [];

  if (!username || !email || !number || !password || !password2) {
    errors.push({ msg: 'Please enter all fields' });
  }

  if (password != password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }

  if (errors.length > 0) {
    res.render('registration', {
      errors,
      username,
      email,
      number,
      password,
      password2
    });
  } else {

    User.findOne({username:username}).then(user=>
      {
        if (user) {
          errors.push({ msg: 'UserName already exists' });
          res.render('registration', {
            errors,
            username,
            email,
            number,
            password,
            password2
          });
        }
      });
      User.findOne({number:number}).then(user=>
        {
          if (user) {
            errors.push({ msg: 'Number is  already registered' });
            res.render('registration', {
              errors,
              username,
              email,
              number,
              password,
              password2
            });
          }
        });
  
    User.findOne({ email: email }).then(user => {
      if (user) {
        errors.push({ msg: 'Email already exists' });
        res.render('registration', {
          errors,
          username,
          email,
          number,
          password,
          password2
        });
      } else {
	      var ran= verify_email(email,username,req.hostname);
        const newUser = new User({
          username,
          email,
          number,
          password,
	  verify_id:ran
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                req.flash(
                  'success_msg',
                  'You are now registered, Verify Your EMail ID by Clicking onto the verification link sent your registered Email'
                );
                res.redirect('/user/login');
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
});

// Login
app.post('/login', (req, res, next) => {
  let errors=[];
  User.findOne({email:req.body.email}).then(user=>
    { 
    
        if(user)
        {
         if(user.verify)
         {
          passport.authenticate('local', {
            successRedirect: '/'+user.username+'/dashboard',
            failureRedirect: '/user/login',
            failureFlash: true
          })(req, res, next);
         }
         else{
          errors.push({ msg: 'Email is not Verified' });
          res.render('login', {errors});

         }
        }
        else
        {
          passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/user/login',
            failureFlash: true
          })(req, res, next);
          
        }
      
     
     
      
    });
    
    
});
   
   


  

  


// Logout
app.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/user/login');
});

module.exports = app;
//-----------------------------------------------------------------------------//




