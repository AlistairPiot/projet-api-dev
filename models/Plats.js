const mongoose = require("mongoose");

// Définir le schéma
const PlatsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    prix: {
        type: Number,
        required: true,
        unique: true,
    },
    specialite: {
        type: Boolean,
        required: true,
    },
});

module.exports = mongoose.model("Plats", PlatsSchema);
