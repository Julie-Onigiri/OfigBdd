// Toujours commencer par importer les variables d'environnement !
require('dotenv').config();

const express = require('express');

// on importe le router
const router = require('./app/router');
// les réglages de express pour utiliser EJS et le bon dossier de views.


// un peu de config
const PORT = process.env.PORT || 5000;


const app = express();

// servir les fichiers statiques qui sont dans "integration"
app.use(express.static('integration'));

// routage !
app.use(router);
app.set('view engine', 'ejs');
app.set('views', './app/views');

// on lance le serveur
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
