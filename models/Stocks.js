const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

// Définir le schéma
const stocksSchema = new mongoose.Schema({
    name_ingredient: {
        type: String,
        required: true,
        unique: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
});


stocksSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Stocks", stocksSchema);
