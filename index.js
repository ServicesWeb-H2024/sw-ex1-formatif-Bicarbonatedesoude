dotenv.config();
const cleAPI = process.env.cleAPI;
const express = require('express');
const morgan = require('morgan')
const dotenv = require('dotenv');
const app = express();
const PORT = 7000;
app.use(express.json());
app.use(morgan('dev'));
const mysql = require('mysql');
const router = express.Router();
app.use(express.urlencoded({ extended: true }));
const db = require("./.src/config/db.js");


//initier swagger-ui
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./.src/config/documentation.json');
const swaggerOptions = {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: "Demo API"
};
const routes = require('./routes/routes_pokemon.js');
app.use('/api/pokemon/', routes);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));






app.get('/', (req, res) => {
    res.send("<h1>Mon premier serveur web n3 sur express !</h1>");
});
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});