const Places = require("../models/Places.js");

// fonction get pour récupérer tous les Places
exports.getAllPlaces = (req, res, next) => {
    Places.find()
        .then((places) => res.status(200).json(places))
        .catch((error) => res.status(400).json({ error }));
};

// fonction get pour récupérer un place
exports.getOnePlace = (req, res, next) => {
    Places.findOne({ _id: req.params.id })
        .then(place =>
            res.status(200).json({
                id: place._id,
                num_place : place.num_place,
                disponibilite: place.disponibilite,
            })
        )
        .catch((error) => res.status(404).json({ error }));
};

// fonction post pour ajouter un place
exports.createPlace = (req, res, next) => {
    const place = new Places({
        ...req.body, // On décompose toutes les données dans le req.body
    });
    place.save() // On enregistre dans la BDD
        .then(() =>
            res.status(201).json({ message: "Le place vient d'être créé !" })
        )
        .catch((error) => res.status(400).json({ error: error }));
};

// fonction delete pour supprimer un place
exports.deletePlaceById = (req, res, next) => {
    Places.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Place supprimé !" }))
        .catch((error) => res.status(400).json({ error }));
};

// fonction put pour modifier un place
exports.updatePlaceById = (req, res, next) => {
    Places.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: "Place modifié !" }))
        .catch((error) => res.status(400).json({ error }));
};
