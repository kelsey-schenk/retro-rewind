const { Reviews } = require('../models');

const ReviewsData = [
  {
		score: '5',
		review_title: "Two thumbs up!",
		review_text: "A must see movie.",
		user_id: "2",
		movies_id: "1"
	},
	{
		score: '5',
		review_title: "Two thumbs down!",
		review_text: "A must not see movie.",
		user_id: "3",
		movies_id: "2"	
	},
	{
		score: '2',
		review_title: "Feel good movie of the season!",
		review_text: "Such super good feelings.",	
		user_id: "3",
		movies_id: "3"
	},
	{
		score: '3',
		review_title: "Super special movie.",
		review_text: "A classic. #blessed",
		user_id: "5",
		movies_id: "4"	
	},
	{
		score: '5',
		review_title: "Not a total waste of money.",
		review_text: "Such a magical movie.",
		user_id: "4",
		movies_id: "5",	
	},
	{
		score: '1',
		review_title: "Stunning and brave performance",
		review_text: "A rather shallow attemp at cinima.",
		user_id: "8",
		movies_id: "6",
	},
	{
		score: "4",
		review_title: "Two thumbs up!",
		review_text: "Must see magical movie of the season.",
		user_id: "1",
		movies_id: "1",
	},
	{
		score: "1",
		review_title: "Two thumbs down!",
		review_text: "Absolute garbage movie, really bad.",
		user_id: "4",
		movies_id: "3",
	},
	{
		score: "5",
		review_title: "Super duper good movie!",
		review_text: "SUch a magical feel good movie.",
		user_id: "1",
		movies_id: "1",
	},
	{
		score: "3",
		review_title: "A very meh movie",
		review_text: "It was alright.",
		user_id: "6",
		movies_id: "3",
	},
	{
		score: "4",
		review_title: "Super good movie.",
		review_text: "Twaz a legit movie bro.",
		user_id: "7",
		movies_id: "4",
	},
	{
		score: "2",
		review_title: "Not a good movie.",
		review_text: "It was like totally not a good movie.",
		user_id: "6",
		movies_id: "5",
	},
	{
		score: "3",
		review_title: "Not good but not bad.",
		review_text: "An alright way to kill two hours.",
		user_id: "3",
		movies_id: "6",
	}
];

const seedReviews = () => Reviews.bulkCreate(ReviewsData);

module.exports = seedReviews;