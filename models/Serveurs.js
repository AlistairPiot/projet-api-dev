const mongoose = require("mongoose");
const userSchema = require("./Users").schema; // Importer uniquement le schéma de User

// Cloner le schéma utilisateur pour éviter toute modification accidentelle
const serveurSchema = new mongoose.Schema(userSchema.obj);

// Exporter le modèle Admin
module.exports = mongoose.model("Serveurs", serveurSchema);
