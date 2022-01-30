const { Reviews } = require('../models');

const review = [
  {
		username: "User2",
		movie_id: "1",
		rating: '5',
		title: "Two thumbs up!",
		description: "A must see movie."
	},
];

const seedMovies = () => Post.bulkCreate(MoviesData);

module.exports = seedMovies;