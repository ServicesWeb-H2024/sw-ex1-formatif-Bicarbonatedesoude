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

const routes = require('./routes/routes_film.js');
app.use('/api/film/', routes);


app.get('/', (req, res) => {
    res.send("<h1>allo!</h1>");
});
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});