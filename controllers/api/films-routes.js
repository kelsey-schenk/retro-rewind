const router = require('express').Router();
const { User, Review, Rentals, Movies, Movie } = require('../../models')

router.get('/', (req, res) => {
    Movies.findAll(
    {
        include: [
        {
            model: Movies,
            attributes: ['id', 'user_id', 'title', 'rating', 'status']
        },
        ]
    }
    )
    .then(moviesData => res.json(moviesData))
    .catch(err => {
    console.log(err);
    res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Movies.findOne(
    {
        where: {
        id: req.params.id
        },
        include: [
        {
            model:  Movies,
            attributes: ['id', 'user_id', 'title', 'rating', 'status']
        },
        ]
    }
    )
    .then(moviesData => res.json(moviesData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

router.post('/', (req, res) => {
    /* req.body should look like this...
    {
        title: "Free Willy",
        rating: "PG",
        description: "Movie Description",
    }
    */
    Movies.create(req.body)
    .then((movie) => {
        res.status(200).json(movie);
    })
    .catch((err) => {
        console.log(err);
        res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
    Movie.update(
        {
            title: req.params.title,
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbMoviesData =>{
        if(!dbMoviesData) {
            res.status(404).json({ message: 'No movie found with this id' });
        }
        res.json(dbMoviesData);
    })
    .catch((err) => {
        // console.log(err);
        res.status(400).json(err);
    });
});


router.delete('/:id', (req, res) => {
    // update product data
    Movie.destroy({
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