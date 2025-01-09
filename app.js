// on importe le paquet express
const express = require("express");

// on importe le paquet mongoose
const mongoose = require("mongoose");

const Plats = require("./models/Plats");

// On crée l'application Express
const app = express();

// On export l’application
module.exports = app;

mongoose
    .connect(
        "mongodb+srv://alistairpiot:lG5AwJIOLo7JSJXA@cluster0.s93c4.mongodb.net/db-api-restaurant?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée !"));

exports.getAllPlats = (req, res, next) => {
    Plats.find()
        .then((plats) => res.status(200).json(plats))
        .catch((error) => res.status(400).json({ error }));
};
