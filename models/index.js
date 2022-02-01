// import all models
const User = require('./user'); // same as in Module
const Movies = require('./movies'); // equivelent to post from module?
const Rentals = require('./rentals'); // not sure what this one would be similar to
const Reviews = require('./reviews'); // equivelent to comment from the module? Also 

// create associations
User.hasMany(Reviews, {
  foreignKey: 'user_id'
});

Movies.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'cascade'
});


Reviews.belongsTo(User, {
  foreignKey: 'user_id',
});

Reviews.belongsTo(Movies, {
  foreignKey: 'movies_id',
});

Movies.hasMany(Reviews, {
  foreignKey: 'movies_id'
});

Rentals.belongsTo(Movies, {
  foreignKey: 'movie_id',
  onDelete: 'cascade'
});



module.exports = { User, Movies, Rentals, Reviews };
