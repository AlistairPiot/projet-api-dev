const mongoose = require('mongoose');

// Définir le schéma
const placesSchema = new mongoose.Schema({
  num_tabl: {
    type: Number,
    required: true,
  },
  disponibilite: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('Places', placesSchema);
