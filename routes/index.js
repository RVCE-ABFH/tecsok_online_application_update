const express = require('express');
const app = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
app.get('/home', forwardAuthenticated, (req, res) => res.render('home'));

// Dashboard
app.get('/:id/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
);

module.exports = app;
