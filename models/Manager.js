const {Model, Datatypes, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Manager extends Model {};

Manager.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        first_name :{
            type: DataTypes.STRING,
            allowNull: false
        },

        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },

        
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5]
            }
        }
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored:true,
        modelName: 'manager'
    }
);

module.exports = Manager;