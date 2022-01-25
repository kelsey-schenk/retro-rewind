const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class movies extends Model {}

movies.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            
        }
    }
)