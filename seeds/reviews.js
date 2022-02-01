const { Reviews } = require('../models');

const postdata = [
  {
		user_id: "2",
		movie_id: "1",
		rating: '5',
		title: "Two thumbs up!",
		description: "A must see movie."
	},
	{
		user_id: "3",
		movie_id: "2",
		rating: '5',
		title: "Two thumbs down!",
		description: "A must not see movie."	
	},
	{
		user_id: "3",
		movie_id: "3",
		rating: '2',
		title: "Feel good movie of the season!",
		description: "Such super good feelings."	
	},
	{
		user_id: "5",
		movie_id: "4",
		rating: '3',
		title: "Super special movie.",
		description: "A classic. #blessed"	
	},
	{
		user_id: "4",
		movie_id: "5",
		rating: '5',
		title: "Not a total waste of money.",
		description: "Such a magical movie."	
	},
	{
		user_id: "8",
		movie_id: "6",
		rating: '1',
		title: "Stunning and brave performance",
		description: "A rather shallow attemp at cinima."	
	}
];

const seedReviews = () => Post.bulkCreate(ReviewsData);

module.exports = seedReviews;