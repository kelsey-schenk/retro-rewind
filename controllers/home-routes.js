const router = require('express').Router();

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

module.exports = router;