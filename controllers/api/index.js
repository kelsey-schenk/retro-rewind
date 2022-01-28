const router = require('express').Router();

const reviewsRoutes = require('./reviews-routes');
const userRoutes = require('./user-routes');
const movieRoutes = require('./movie-routes');


router.use('/reviews', reviewsRoutes);
router.use('/users', userRoutes);
router.use('/movies', movieRoutes);

module.exports = router;