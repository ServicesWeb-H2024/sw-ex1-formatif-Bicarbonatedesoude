const db = require('../.src/config/db.js');

module.exports = {
    listePaginer: () => {
        const query = 'SELECT * FROM film ORDER BY id';
        return new Promise((resolve, reject) => {
            db.query(query, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
};