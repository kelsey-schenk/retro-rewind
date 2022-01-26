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
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        rating: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
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
        modelName: 'movies',
    }
);

module.exports = movies;