const client = require('../database');

const articleDataMapper = {
    async getAllFigurines() {
        const result = await client.query('SELECT * FROM figurine');

        //console.log(test);
        return result.rows;

    },

    async getOneFigurine(id) {
        const result = await client.query('SELECT * FROM figurine WHERE id=$1', [id]);

        //console.log(test);
        return result.rows[0];

    },

}

module.exports = articleDataMapper;