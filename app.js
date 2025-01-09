// on importe le paquet express
const express = require("express");

// on importe le paquet mongoose
const mongoose = require('mongoose');

// On crée l'application Express
const app = express();



// On export l’application
module.exports = app;

mongoose
  .connect("mongodb+srv://<user>:<password>@cluster0.2vatb0h.mongodb.net/<database>?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"))
