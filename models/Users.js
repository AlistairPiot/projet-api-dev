const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

// Définir le schéma
const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    first_name: {
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
usersSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Users", usersSchema);
