const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Reviews, Rentals, Movie } = require('../models');

//Index Links
router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

router.get('/movie', (req, res) => {
  res.render('movie');
});

router.get('/searchMovies', (req, res) => {
  res.render('searchMovies');
});

//USER SESSION
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


module.exports = router;