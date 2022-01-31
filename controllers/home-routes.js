const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Reviews, Rentals, Movies } = require('../models');

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

//USER SESSION
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

//Populate Movies Page with each movie
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

//Populate Single Movie Page
router.get('/movie/:id', (req, res) => {
  Movies.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 
    'title', 
    'rating', 
    'description', 
    'status' 
    // 'user_id'
    ],
    include: [
      {
        model: Reviews,
        attributes: ['id', 'review_title', 'review_text', 'movies_id', 'user_id'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbMovieData => {
      if (!dbMovieData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      const movie = dbMovieData.get({ plain: true });
      console.log(movie)
      // pass data to template
      res.render('movie', { movie });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Display reviews for single movie
router.get('/movie/:id', (req, res) => {
  Reviews.findAll({
    attributes: ['id', 'score', 'review_title', 'review_text', 'user_id' ],
  })
    .then(dbPostData => {
      const reviews = dbPostData.map(review => review.get({ plain: true }));
      console.log(reviews)
      res.render('reviews', {
        reviews,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;