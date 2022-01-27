// import all models
const User = require('./user'); // same as in Module
const Movie = require('./movies'); // equivelent to post from module?
const Rentals = require('./rentals'); // not sure what this one would be similar to
const Review = require('./reviews'); // equivelent to comment from the module? Also 

// create associations
User.hasMany(Review, {
  foreignKey: 'user_id'
});

Movie.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

// This is where it starts to not line up so cleanly


module.exports = { User, Movie, Rentals, Review };
