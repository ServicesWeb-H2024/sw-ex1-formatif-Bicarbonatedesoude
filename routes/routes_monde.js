const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const app = express();

const controller = require('../controlleurs/pokemon.controllers.js');

const db = require("../.src/config/db.js");

router.get('/', (req, res) => {
    res.send("<h1>allo bienvenu</h1>")
});

//AFFICHER TOUT LE MONDE
router.get('/tous', controller.afficherTousPokemon);

//AFFICHER TOUT LE MONDE
router.get('/:id', controller.afficherUnPokemon);

//SUPPRIMER UNE PERSONNE
router.delete('/:id', controller.supprimerPokemon);

//MODIFIER UNE PERSONNE
router.put('/', controller.modifierPokemon);

//AJOUTER UNE PERSONNE
router.post('/', controller.ajouterPokemon);


module.exports = router;
