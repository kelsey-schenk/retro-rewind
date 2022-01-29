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

router.get('/dashboard', (req, res) => {
  res.render('dashboard', {
    loggedIn: req.session.loggedIn
  });
});

router.get('/movie', (req, res) => {
  res.render('movie');
});

/*
router.get('/searchMovies', (req, res) => {
  res.render('searchMovies', {
    title: 'Handlebars Docs',
    description: 'movie description'
  });
});
*/

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
      // pass a single post object into the homepage template
      const posts = dbPostData.map(post => post.get({ plain: true }));
      console.log(posts[0])
      res.render('searchMovies', {
        posts
        //loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
module.exports = router;