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
  //Fetch User Movies
  Movies.findAll({
    attributes: ['id', 'title', 'rating', 'description', 'status', 'user_id'],
    where: {
      user_id: req.session.user_id
    },
  })
    .then(dbMovieData => {
      const movies = dbMovieData.map(movie => movie.get({ plain: true }));

      //Fetch User Rentals
      Rentals.findAll({
        attributes: ['id', 'user_id'],
        where: {
          user_id: req.session.user_id
        },
        include: [
          {
            model: Movies,
            attributes: ['title', 'id']
          }
        ]
      })
        .then(dbRentalData => {
          const rentals = dbRentalData.map(rental => rental.get({ plain: true }));
          
          //Fetch User Reviews

          Reviews.findAll({
            attributes: ['id', 'review_title', 'review_text'],
            where: {
              user_id: req.session.user_id
            }
          })
            .then(dbReviewsData => {
              const reviews = dbReviewsData.map(rental => rental.get({ plain: true }));
              console.log(reviews)
    
              res.render('dashboard', {
                rentals,
                reviews,
                movies,
                loggedIn: req.session.loggedIn
              });
            })
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
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
      res.render('movie', { 
      movie, 
      loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;