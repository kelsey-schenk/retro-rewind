const router = require('express').Router();
const { User, Review, Rentals, Movies } = require('../../models')

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
        product_name: "Basketball",
        price: 200.00,
        stock: 3,
        tagIds: [1, 2, 3, 4]
    }
    */
    Movies.create(req.body)
    .then((product) => {
        if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
            return {
            product_id: product.id,
            tag_id,
            };
        });
        return ProductTag.bulkCreate(productTagIdArr);
        }
        res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
        console.log(err);
        res.status(400).json(err);
    });
});


module.exports = router;