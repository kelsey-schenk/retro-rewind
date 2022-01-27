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
User.belongsToMany(Movie, {
  through: Review,
  as: 'movie_review',

  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Movie.belongsToMany(User, {
  through: Review,
  as: 'movie_review',
  foreignKey: 'movies_id',
  onDelete: 'SET NULL'
});

Review.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Review.belongsTo(Movie, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(Review, {
  foreignKey: 'user_id'
});

Movie.hasMany(Review, {
  foreignKey: 'post_id'
});

.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL'
});

User.hasMany(Rentals, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { User, Movie, Rentals, Review };
