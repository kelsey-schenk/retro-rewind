const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class rentals extends Model {}

rentals.init()