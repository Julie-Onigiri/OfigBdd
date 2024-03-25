const path = require('path');
const dataMapper = require('../dataMapper/dataMapper.js');

const bookmarksController = {


  // méthode pour afficher les favoris
  bookmarksPage: (req, res) => {
    //console.log(req.session);

    const tabSession = req.session.bookMarks;
    console.log(tabSession);

    res.render('favoris.ejs', {
      tabSession,
    });

    //const filePath = path.resolve(__dirname + '/../../integration/favoris.html');
    //response.sendFile(filePath);
  },

  async addBookmarks(req, res) {
    const idFigurine = Number(req.params.id);
    let foundFigurine = [];

    if (!req.session.bookMarks) {
      req.session.bookMarks = [];
    }

    if (!req.session.bookMarks.includes(idFigurine)) {
      req.session.bookMarks.push(idFigurine);
    }

    for (let i = 0; i < req.session.bookMarks.length; i++) {
      try {
        result = await dataMapper.getOneFigurine(req.session.bookMarks[i]);

        foundFigurine.push(result);

      } catch (error) {
        // Pour notre information, on va afficher l'erreur dans la console
        console.trace(error);

        // Si j'ai une erreur, je vais envoyer une erreur 500
        res.status(500).send('Erreur serveur');
      }
    }

    //console.log(foundFigurine);

    res.render('favoris', {
      //tabSession: req.session.bookMarks,
      foundFigurine
    });
  }

};


module.exports = bookmarksController;
