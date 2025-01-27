const Reservations = require("../models/Reservations.js");

// fonction get pour récupérer tous les reservations
exports.getAllReservations = (req, res, next) => {
    Reservations.find()
        .then((reservations) => res.status(200).json(reservations))
        .catch((error) => res.status(400).json({ error }));
};

// fonction get pour récupérer un reservation
exports.getOneReservation = (req, res, next) => {
    Reservations.findOne({ _id: req.params.id })
        .then(reservation =>
            res.status(200).json({
                id: reservation._id,
                nom: reservation.nom,
                description: reservation.description,
                prix: reservation.prix,
                specialite: reservation.specialite,
            })
        )
        .catch((error) => res.status(404).json({ error }));
};

// fonction post pour ajouter un reservation
exports.createReservation = (req, res, next) => {
    const reservation = new Reservations({
        ...req.body, // On décompose toutes les données dans le req.body
    });
    reservation.save() // On enregistre dans la BDD
        .then(() =>
            res.status(201).json({ message: "Le reservation vient d'être créé !" })
        )
        .catch((error) => res.status(400).json({ error: error }));
};

// fonction delete pour supprimer un reservation
exports.deleteReservationById = (req, res, next) => {
    Reservations.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Reservation supprimé !" }))
        .catch((error) => res.status(400).json({ error }));
};

// fonction put pour modifier un reservation
exports.updateReservationById = (req, res, next) => {
    Reservations.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: "Reservation modifié !" }))
        .catch((error) => res.status(400).json({ error }));
};
