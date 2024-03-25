// Toujours commencer par importer les variables d'environnement !
require('dotenv').config();

const express = require('express');
const expressSession = require('express-session');


// on importe le router
const router = require('./app/router');

// un peu de config
const PORT = process.env.PORT || 5000;


const app = express();

// On défini le moteur de template
app.set('view engine', 'ejs');
// On défini le dossier contenant les vues
app.set('views', __dirname + '/app/views');

// Sessions
app.use(expressSession({
  resave: true,
  saveUninitialized: true,
  secret: "Guess it!",
  cookie: {
    secure: false,
    maxAge: (1000 * 60 * 60) // ça fait une heure
  }
}));


// servir les fichiers statiques qui sont dans "integration"
app.use(express.static('integration'));

// routage !
app.use(router);


// on lance le serveur
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
