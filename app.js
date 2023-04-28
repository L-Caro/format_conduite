// Variables d'environnement
require('dotenv').config();

// Les dépendances
const express = require('express');
const notFound = require('./src/middleware/error/notFound');

// Les routers
const router = require('./src/routers');

// Création de l'application
const app = express();

// Setup view engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

// Setup du dossier static
app.use(express.static('public')); // fichiers statique

// Setup body parser
app.use(express.urlencoded({ extended: true }));  // Lecture du payload

// ===---- Routes ----===
app.use(router.main);
app.use(router.formation);
app.use(router.inscription);
app.use(router.tarif);
app.use(router.info);
app.use(router.fabrication);

// ===---- 404 ----===
app.use(notFound);


//Lancement de l'application
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`listening on http://localhost:${PORT}`);
});
