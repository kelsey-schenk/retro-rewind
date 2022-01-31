const router = require('express').Router();
const { User, Review, Rentals, Movies } = require('../../models')

router.get('/', (req, res) => {
    Movies.findAll({
        attributes: ['id', 'title', 'rating', 'description', 'status', 'user_id'],
    })
      .then(dbMoviesData => res.json(dbMoviesData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/:id', (req, res) => {
    Movies.findOne({
        attributes: ['id', 'title', 'rating', 'description', 'status', 'user_id'],
        where: {
            id: req.params.id
        },
    })
    .then(dbMoviesData =>{
        if (!dbMoviesData) {
            res.status(404).json({ message: 'No movie found with this id' });
            return;
        }
        res.json(dbMoviesData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    /* req.body should look like this...
    {
        "title": "Free Willy",
        "rating": "PG",
        "description": "Movie Description",
    }
    */
   if (req.session) {
        Movies.create({
            user_id: req.session.user_id,
            title: req.body.title,
            description: req.body.description,
            rating: req.body.rating
        })
        .then((movie) => {
            res.status(200).json(movie);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
   }

});

router.put('/:id', (req, res) => {
    Movies.update(
      {
        status: req.body.status
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbMovieData => {
        if (!dbMovieData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbMovieData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


router.delete('/:id', (req, res) => {
    // update product data
    Movies.destroy({
    where: {
        id: req.params.id,
        },
    })
    .then(moviesData => {
        if(!moviesData) {
            res.status(404).json({ message: 'No movie found with that id' });
        }
        res.json(moviesData);
    })
    .catch((err) => {
        // console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;