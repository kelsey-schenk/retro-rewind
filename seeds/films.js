const { Movies } = require('../models');

const postdata = [
  {
		title: "Free Willy",
		rating: "PG-13",
		description: "A boy and a whale",
		status: "available",
		user_id: 1
	},
  {
		title: "The Goonies",
		rating: "PG-13",
		description: "A group of young misfits called The Goonies discover an ancient map and set out on an adventure to find a legendary pirate's long-lost treasure.",
		status: "available",
		user_id: 1
  },
  {
		title: "Rugrats in Paris",
		rating: "G",
		description: "While in Paris, a group of young kids try to find one of their friends a new mom while stopping his dad from marrying a conniving businesswoman who doesn't love him and hates kids.",
		status: "available",
		user_id: 2
  },
  {
		title: "Free Willy",
		rating: "PG-13",
		description: "A boy and a whale",
		status: "available",
		user_id: 3
  },
  {
		title: "Star Wars: Episode IV - A New Hope",
		rating: "PG-13",
		description: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
		status: "available",
		user_id: 5
  },
  {
    title: "Pete's Dragon (1977)",
    rating: "PG-13",
		description: "An orphan boy and his magical dragon come to town with his abusive adoptive parents in pursuit.",
		status: "available",
		user_id: 1
  },
  {
    title: 'Bloodsport',
    rating: "PG-13",
		description: "Frank Dux, an American martial artist serving in the military, who decides to leave the army to compete in a martial arts tournament in Hong Kong where fights to the death can occur.",
		status: "available",
		user_id: 1
  }
];

const seedMovies = () => Post.bulkCreate(MoviesData);

module.exports = seedMovies;