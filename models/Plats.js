const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

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
PlatsSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Plats", PlatsSchema);
