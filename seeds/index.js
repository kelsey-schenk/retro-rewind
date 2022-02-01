const seedUsers = require('./users');
const seedMovies = require('./films');
const seedReviews = require('./reviews');
// const seedVotes = require('./rentals');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedMovies();
  console.log('--------------');

   await seedReviews();
   console.log('--------------');

  // await seedRentals();
  // console.log('--------------');

  process.exit(0);
};

seedAll();