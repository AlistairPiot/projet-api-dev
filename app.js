// on importe le paquet express
const express = require("express");

// on importe le paquet mongoose
const mongoose = require("mongoose");

// On crée l'application Express
const app = express();

// On export l’application
module.exports = app;

mongoose
    .connect(
        "mongodb+srv://alistairpiot:CIcHMMfHJ3NoXnXl@cluster0.s93c4.mongodb.net/db-api-restaurant?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée !"));
