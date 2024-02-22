const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const app = express();

const controller = require('../controlleurs/monde.controllers.js');

const db = require("../.src/config/db.js");

router.get('/', (req, res) => {
    res.send("<h1>allo bienvenu</h1>")
});

//AFFICHER TOUT LE MONDE
router.get('/tous', controller.affichelpaginer);


module.exports = router;
