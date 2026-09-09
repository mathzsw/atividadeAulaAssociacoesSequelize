const { DataTypes } = require('sequelize');
const sequelize = require('../config/bd');

const FichaTecnica = sequelize.define(
    'FichaTecnica',
    { 
        bilheteria: {
            type: DataTypes.FLOAT,
            allowNull: false},
    },
    {
        tableName: 'fichasTecnicas',
    }
);
            
module.exports = FichaTecnica;