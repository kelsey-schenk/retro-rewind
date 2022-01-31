const router = require('express').Router();
const { User, Review, Rentals, Movies } = require('../../models')

router.get('/', (req, res) => {
    Rentals.findAll({
        attributes: ['id', 'user_id', 'movie_id'],
    })
      .then(dbRentalsData => res.json(dbRentalsData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/:id', (req, res) => {
    Rentals.findOne({
        attributes: ['id', 'user_id', 'movie_id'],
        where: {
            id: req.params.id
        },
    })
    .then(dbRentalsData =>{
        if (!dbRentalsData) {
            res.status(404).json({ message: 'No movie found with this id' });
            return;
        }
        res.json(dbRentalsData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
   if (req.session) {
        Rentals.create({
            user_id: req.session.user_id,
            movie_id: req.body.movie_id,
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
    Rentals.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    })
    .then(dbRentalsData => {
        if (!dbRentalsData[0]) {
            res.status(404).json({ message: 'No movie found with this id'});
            return;
        }
        res.json(dbRentalsData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


router.delete('/:id', (req, res) => {
    // update product data
    Rentals.destroy({
    where: {
        id: req.params.id,
        },
    })
    .then(dbRentalsData => {
        if(!dbRentalsData) {
            res.status(404).json({ message: 'No rental found with that id' });
        }
        res.json(dbRentalsData);
    })
    .catch((err) => {
        // console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;