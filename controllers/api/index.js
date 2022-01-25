const router = require('express').Router();
const reviewsRoutes = require('./reviews-routes');
const userRoutes = require('./user-routes');
const filmsRoutes = require('./films-routes');


router.use('/reviews', reviewsRoutes);
router.use('/products', userRoutes);
router.use('/films', filmsRoutes);

module.exports = router;