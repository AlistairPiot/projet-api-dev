const mongoose = require('mongoose');

// Définir le schéma
const reservationsSchema = new mongoose.Schema({
  numero_reservation: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: 'En attente',
  },
  nombre_personne: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },

});

module.exports = mongoose.model('Reservations', reservationsSchema);
