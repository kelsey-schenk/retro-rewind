const sequelize = require('../config/connection');
const { User, Movies } = require('../models');

const UserData = [
  {
		username: 'shawna',
		email: 'sboucher@gmail.com',
		password: 'password'
  },
  {
    username: 'Erik',
    email: 'erik@gmail.com',
    password: 'password123'
  },
  {
    username: 'Kelsey',
    email: 'kesley@gmail.com',
    password: 'password123'
  },
  {
    username: 'Kevin',
    email: 'kevin@gmail.com',
    password: 'password123'
  },
  {
    username: 'User5',
    email: 'email5@gmail.com',
    password: 'password123'
  },
  {
    username: 'User6',
    email: 'email6@gmail.com',
    password: 'password123'
  },
  {
    username: 'User7',
    email: 'email7@gmail.com',
    password: 'password123'
  },
  {
    username: 'User8',
    email: 'email8@gmail.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(UserData, {individualHooks: true});

module.exports = seedUsers;