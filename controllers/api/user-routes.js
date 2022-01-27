const router = require('express').Router();
const { User, Review, Rental, Movie } = require('../../models');
const rentals = require('../../models/rentals');
const reviews = require('../../models/reviews');

// GET /api/users
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// GET /api/users/1
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: movies,
                attributes: ['id', 'movie_id', 'title']
            },
            {
                model: rentals,
                attributes: ['id', 'movie_id'],
                through: rentals,
                as: 'rented_movies'
            },
            {
                model: reviews,
                attributes: []
            }
        ]
    })
    .then(dbUserData =>{
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;