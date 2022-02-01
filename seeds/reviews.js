const { Reviews } = require('../models');

const ReviewsData = [
  {
		score: "4",
		review_title: "Two thumbs up!",
		review_text: "Must see magical movie of the season.",
		user_id: "1",
		movie_id: "1",
		rating_provided: "5",
	},
	{
		score: "1",
		review_title: "Two thumbs down!",
		review_text: "Absolute garbage movie, really bad.",
		user_id: "4",
		movie_id: "3",
		rating_provided: "1",
	},
	{
		score: "5",
		review_title: "Super duper good movie!",
		review_text: "SUch a magical feel good movie.",
		user_id: "1",
		movie_id: "1",
		rating_provided: "5",
	},
	{
		score: "3",
		review_title: "A very meh movie",
		review_text: "It was alright.",
		user_id: "6",
		movie_id: "3",
		rating_provided: "3",
	},
	{
		score: "4",
		review_title: "Super good movie.",
		review_text: "Twaz a legit movie bro.",
		user_id: "7",
		movie_id: "4",
		rating_provided: "4",
	},
	{
		score: "2",
		review_title: "Not a good movie.",
		review_text: "It was like totally not a good movie.",
		user_id: "6",
		movie_id: "5",
		rating_provided: "2",
	},
	{
		score: "3",
		review_title: "Not good but not bad.",
		review_text: "An alright way to kill two hours.",
		user_id: "3",
		movie_id: "6",
		rating_provided: "3",
	},
];

const seedReviews = () => Reviews.bulkCreate(ReviewsData);

module.exports = seedReviews; 