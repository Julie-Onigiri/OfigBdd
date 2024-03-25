const path = require('path');
const articleDataMapper = require('../dataMapper/dataMapper.js');


const mainController = {

  // méthode pour la page d'accueil
  async homePage(req, res) {
    try {
      const allFigurine = await articleDataMapper.getAllFigurines();
      //console.log(allFigurine);

      res.render('accueil', {
        allFigurine,
      });
      //const filePath = path.resolve(__dirname + '/../../integration/accueil.html');
      //response.sendFile(filePath);

    } catch (error) {
      // Pour notre information, on va afficher l'erreur dans la console
      console.trace(error);

      // Si j'ai une erreur, je vais envoyer une erreur 500
      res.status(500).send('Erreur serveur');
    }


  },

  // méthode pour la page article
  async articlePage(req, res) {
    const id = req.params.id;
    //console.log(id);

    const figurine = await articleDataMapper.getOneFigurine(id);

    res.render(`article`, {
      figurine,
    });

    //const filePath = path.resolve(__dirname + '/../../integration/article.html');
    //response.sendFile(filePath);
  }

};


module.exports = mainController;
