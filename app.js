// on importe le paquet express
const express = require("express");
// on importe le paquet mongoose
const mongoose = require("mongoose");
const platsRoutes = require("./routes/plats.js");
const reservationsRoutes = require("./routes/reservations.js");
const stocksRoutes = require("./routes/stocks.js");
const placesRoutes = require("./routes/places.js");
const usersRoutes = require("./routes/users.js");
const adminsRoutes = require("./routes/admins.js");
const chefsRoutes = require("./routes/chefs.js");
const receptionnistesRoutes = require("./routes/receptionnistes.js");
const serveursRoutes = require("./routes/serveurs.js");
// Importation des packets pour l'utilisation de la documentation swagger
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger-output.json");

// On crée l'application Express
const app = express();

// Middleware pour parser les requêtes JSON
app.use(express.json());

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

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
// A la place des anciens app.use()
app.use("/api/plats", platsRoutes);
app.use("/api/reservations", reservationsRoutes);
app.use("/api/stocks", stocksRoutes);
app.use("/api/places", placesRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/admins", adminsRoutes);
app.use("/api/chefs", chefsRoutes);
app.use("/api/receptionnistes", receptionnistesRoutes);
app.use("/api/serveurs", serveursRoutes);
// On export l’application
module.exports = app;
