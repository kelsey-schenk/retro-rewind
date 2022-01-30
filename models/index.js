// import all models
const User = require('./user'); // same as in Module
const Movies = require('./movies'); // equivelent to post from module?
const Rentals = require('./rentals'); // not sure what this one would be similar to
const Review = require('./reviews'); // equivelent to comment from the module? Also 

// create associations
User.hasMany(Review, {
  foreignKey: 'user_id'
});

Movies.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'cascade'
});

// This is where it starts to not line up so cleanly


module.exports = { User, Movies, Rentals, Review };
