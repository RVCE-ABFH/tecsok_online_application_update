const express = require('express');
const app = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const bodyParser=require("body-parser");
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
        const newUser = new User({
          username,
          email,
          number,
          password
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
                  'You are now registered and can log in'
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
  User.findOne({email:req.body.email}).then(user=>
    {
      if(user)
      {
        passport.authenticate('local', {
          successRedirect: '/'+user.username+'/dashboard',
          failureRedirect: '/user/login',
          failureFlash: true
        })(req, res, next);
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




