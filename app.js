const sequelize = require('./config/bd');
const Filme = require("./models/filme.model");
const FichaTecnica = require("./models/fichaTecnica.model");
require("./models/associacoesModels");

async function executar(){
    try{
        await sequelize.sync({force: true});
        console.log('Conexão BD ok!');

        filme= await Filme.create({
            titulo:'Avatar',
            ano: 2009,
        });

        fichaTecnica= await FichaTecnica.create({
            bilheteria: 2787965087.00,
            idFilme: filme.id
        });

        fichaTecnica.setFilme(filme);
        
    } catch (e) {
        console.log('Erro ao conectar BD: ', e);
    }
};

executar();