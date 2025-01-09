const mongoose = require("mongoose");

// Définir le schéma
const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    fisrt_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Users", usersSchema);
