const mongoose = require('mongoose');

// Définir le schéma
const commandesSchema = new mongoose.Schema({
  numero_commande: {
    type: Number,
    required: true,
  },
  statut: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Commandes', commandesSchema);
