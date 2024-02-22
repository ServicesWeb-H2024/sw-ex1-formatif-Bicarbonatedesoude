// controller.js

const model = require('../models/pokemon.model');

module.exports = {
    affichelpaginer: (req, res) => {
        model.listePaginer()
            .then(result => {
                // Convertir les résultats en une chaîne de caractères avec un retour à la ligne entre chaque entrée
                const formattedResult = result.map(pokemon => `
                    <div>
                        <p><strong>Nom:</strong> ${pokemon.nom} --- <strong>ID:</strong> ${pokemon.id}</p>
                        <p><strong>Type primaire:</strong> ${pokemon.type_primaire} / ${pokemon.type_secondaire ? pokemon.type_secondaire : 'N/A'} </p>
                        <tr>
                            <td><p><strong>PV:</strong> ${pokemon.pv}</p></td>
                            <td><p><strong>Attaque:</strong> ${pokemon.attaque}</p></td>
                            <td><p><strong>Défense:</strong> ${pokemon.defense}</p></td>
                        </tr>
                    </div>
                    <hr>
                `).join('');

                // Renvoyer la chaîne formatée
                res.send(formattedResult);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des pokémons :', error);
                res.status(500).json({ error: 'Erreur serveur' });
            });
    }
};
