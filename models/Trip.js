const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {}

Trip.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        allowNull:false
    },
    trip_budget: {
         type: DataTypes.DECIMAL,
         allowNull:false,
         validate: {
             isDecimal: true
         }
    },
    traveller_amount: {
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue: 1,
        validate:{
            isNumeric: true
        }
    },
    traveller_id: {
        type:DataTypes.INTEGER,
        refereces: {
            model: 'traveller',
            key: 'id'
        }
    },
    location_id: {
        type:DataTypes.INTEGER,
        refereces: {
            model: 'location',
            key: 'id'
        }
    }
},{
    sequelize
});

module.exports=Trip