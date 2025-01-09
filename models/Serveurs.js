const mongoose = require("mongoose");
const usersSchema = require("./Users").schema; // Importer uniquement le schéma de User

// Cloner le schéma utilisateur pour éviter toute modification accidentelle
const serveursSchema = new mongoose.Schema(usersSchema.obj);

// Exporter le modèle Admin
module.exports = mongoose.model("Serveurs", serveursSchema);
