const mongoose = require("mongoose");
const userSchema = require("./Users").schema; // Importer uniquement le schéma de User

// Cloner le schéma utilisateur pour éviter toute modification accidentelle
const adminSchema = new mongoose.Schema(userSchema.obj);

// Ajouter des propriétés spécifiques à l'admin
adminSchema.add({
    role: {
        type: String,
        default: "admins",
        required: true,
    },
    permissions: {
        type: [String], // Liste des permissions spécifiques à l'admin
        default: [],
    },
});

// Exporter le modèle Admin
module.exports = mongoose.model("Admins", adminSchema);
