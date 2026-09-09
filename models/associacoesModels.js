const Filme = require("./filme.model");
const FichaTecnica = require("./fichaTecnica.model");

Filme.hasOne(
    FichaTecnica, 
    {
        foreignKey: 'idFilme',
        as: 'fichaTecnica'
    }
);

FichaTecnica.belongsTo(
    Filme, 
    {
        foreignKey:'idFilme',
        as: 'filme'
    }
);
