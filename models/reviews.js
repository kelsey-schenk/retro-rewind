const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class reviews extends Model {}

reviews.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        review_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        review_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        movies_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'movies',
                key: 'id'
            }
        },
        rating_provided: {
            type: DataTypes.INTEGER
            // what else here?
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'reviews',
    }
);

module.exports = reviews;