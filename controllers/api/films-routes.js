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
    // find a single product by its `id`
    // be sure to include its associated Category and Tag data
    Product.findOne(
    {
        where: {
        id: req.params.id
        },
        include: [
        {
            model: Category,
            attributes: ['category_name']
        },
        {
            model: Tag,
            attributes: ['tag_name']
        }
        ]
    }
    )
    .then(productData => res.json(productData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err)
      });
  });

module.exports = router;