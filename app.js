// on importe le paquet express
const express = require("express");
// on importe le paquet mongoose
const mongoose = require("mongoose");
const platsRoutes = require("./routes/plats");
// On crée l'application Express
const app = express();

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

// A la place des anciens app.use()
app.use("/plats", platsRoutes);

// On export l’application
module.exports = app;
