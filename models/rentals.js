const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Rentals extends Model {}

Rentals.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            }
        },
        movie_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'movies',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'rentals',
    }

)

module.exports = Rentals;