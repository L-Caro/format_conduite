const main = require('./mainRouter');
const formation = require('./formationRouter');
const inscription = require('./inscriptionRouter');
const tarif = require('./tarifRouter');
const info = require('./infoRouter');
const fabrication= require('./fabricationRouter')

module.exports = {
    main,
    formation,
    inscription,
    tarif,
    info,
    fabrication
};
