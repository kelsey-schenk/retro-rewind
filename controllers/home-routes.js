const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Reviews, Rentals, Movie, Movies } = require('../models');

//Index Links

router.get('/', (req, res) => {
  console.log(req.session);
  res.render('homepage', {
    loggedIn: req.session.loggedIn
  });
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

/*
router.get('/dashboard', (req, res) => {
  res.render('dashboard', {
    loggedIn: req.session.loggedIn
  });
});
*/

router.get('/movie', (req, res) => {
  res.render('movie');
});

//USER SESSION
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/searchMovies', (req, res) => {
  Movies.findAll({
    attributes: ['id', 'title', 'rating', 'description', 'status', 'user_id'],
    
  })
    .then(dbPostData => {
      const movies = dbPostData.map(movie => movie.get({ plain: true }));

      res.render('searchMovies', {
        movies,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.get('/dashboard', (req, res) => {
  Movies.findAll({
    attributes: ['id', 'title', 'rating', 'description', 'status', 'user_id'],
    where: {
      user_id: req.session.user_id
    },
  })
    .then(dbPostData => {
      const movies = dbPostData.map(movie => movie.get({ plain: true }));
      console.log(movies)
      res.render('dashboard', {
        movies,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;