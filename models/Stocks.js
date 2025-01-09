const mongoose = require('mongoose');

// Définir le schéma
const stocksSchema = new mongoose.Schema({
  name_ingredient: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Stoks', stocksSchema);
