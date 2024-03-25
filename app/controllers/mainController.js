const path = require('path');
const dataMapper = require ('../dataMapper/dataMapper.js');



const mainController = {

  // méthode pour la page d'accueil
 async homePage (request, response){
    // const filePath = path.resolve(__dirname + '/../../integration/accueil.html');
    // response.sendFile(filePath);
    try {
      // je récupere les figurines dans ma base de données
      const figurines = await dataMapper.getAllFigurines();
 
    response.render('accueil',{
      figurines
    });
  } catch (error) {
    // Pour notre information, on va afficher l'erreur dans la console
    console.trace(error);
    // Si j'ai une erreur, je vais envoyer une erreur 500
    response.status(500).send('Erreur serveur');
  
}
 }
,
 // méthode pour la page article
  async articlePage (request, response)  {
    try {
      const articleId = parseInt(request.params.id);
      // const filePath = path.resolve(__dirname + '/../../integration/article.html');
      // response.sendFile(filePath);
      const figurine = await dataMapper.getOneFigurine(articleId);
     

      return response.render('article',{article:figurine});
  } catch (error) {
      console.trace(error);
      response.status(500).send('Erreur serveur');
  }

}
  };



module.exports = mainController;
