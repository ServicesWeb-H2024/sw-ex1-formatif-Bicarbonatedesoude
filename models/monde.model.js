const db = require('../.src/config/db.js');

module.exports = {
    listePaginer: (typeTitre, page) => {
        // Vérifier si le type de titre est valide
        if (typeTitre !== 'film' && typeTitre !== 'serie') {
            return Promise.reject(`Le type "${typeTitre}" est invalide`);
        }

        // Vérifier si le numéro de page est valide
        if (isNaN(page) || page < 1) {
            return Promise.reject('La page est invalide');
        }

        // Calculer l'offset pour la pagination
        const offset = (page - 1) * 10;

        // Préparer la requête SQL avec des paramètres
        const query = 'SELECT * FROM netflix_titles WHERE show_type = ? ORDER BY show_id LIMIT ?, 10';

        // Exécuter la requête préparée
        return new Promise((resolve, reject) => {
            db.query(query, [typeTitre, offset], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
};
