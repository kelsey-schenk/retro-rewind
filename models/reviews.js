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
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [20]
            }
        },
        status: {
            type: DataTypes.STRING,
            references: {
                model: 'rentals',
                key: 'date-in',
                validate: {
                    // how do we make sure the status is set to available?
                }
            }
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