const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class user extends Model {}

// defining user schema
user.init(
    {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_email :{
            type: DataTypes.STRING,
            allowNull: false
        },
        user_password
    }
)