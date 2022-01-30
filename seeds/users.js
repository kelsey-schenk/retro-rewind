const sequelize = require('../config/connection');
const { User, Movies } = require('../models');

const userdata = [
  {
		username: 'shawna',
		email: 'sboucher@gmail.com',
		password: 'password'
  },
  {
    username: 'User2',
    email: 'email2@gmail.com',
    password: 'password123'
  },
  {
    username: 'User3',
    email: 'email3@gmail.com',
    password: 'password123'
  },
  {
    username: 'User4',
    email: 'email4@gmail.com',
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