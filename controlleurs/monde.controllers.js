const model = require('../models/netflix.model');

module.exports = {
    affichelpaginer: (req, res) => {
        const typeTitre = req.params.type_titre;
        const page = req.query.page || 1; // Si le paramètre de la requête page n'est pas fourni, utiliser la page 1 par défaut

        model.listePaginer(typeTitre, page)
            .then(result => {
                // Formater les résultats pour répondre avec la structure JSON demandée
                const response = {
                    titres: result.map(item => ({
                        show_id: item.show_id,
                        title: item.title
                    })),
                    filtre: typeTitre,
                    page: page,
                    url_page_suivante: `/api/titres/${typeTitre}?page=${parseInt(page) + 1}`
                };

                // Envoyer la réponse JSON
                res.json(response);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des titres :', error);
                res.status(500).json({ erreur: error.message || 'Erreur serveur' });
            });
    }
};
