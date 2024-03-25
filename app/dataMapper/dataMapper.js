const client = require('../database');

const dataMapper = {

async getAllFigurines(){

    const query ='SELECT * FROM figurine;'
    const resultFigurines = await client.query(query);

    return resultFigurines.rows;
},
async getOneFigurine(id) {
    const foundFigurine = await client.query(`SELECT * FROM figurine WHERE id = $1`,[id]);
        
        


   
// console.log(foundFigurine);
// if (!resultOneFigurine.rows.length) {
//     const error = new Error("La figurine n'existe pas");
//     error.statusCode = 404;

    // * le mot clé throw permet de lever une erreur et on coupe l'exécution du code
//     throw error;
// }

    return foundFigurine.rows[0];
},


};

module.exports = dataMapper;