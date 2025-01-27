const Plats = require("../models/Plats.js");

// fonction get pour récupérer tous les plats
exports.getAllPlats = (req, res, next) => {
    Plats.find()
        .then((plats) => res.status(200).json(plats))
        .catch((error) => res.status(400).json({ error }));
};

// fonction get pour récupérer un plat
exports.getOnePlat = (req, res, next) => {
    Plats.findOne({ _id: req.params.id })
        .then((plat) =>
            res.status(200).json({
                id: plat._id,
                nom: plat.name,
                description: plat.description,
                prix: plat.prix,
                specialite: plat.specialite,
            })
        )
        .catch((error) => res.status(404).json({ error }));
};

// fonction post pour ajouter un plat
exports.createPlat = (req, res, next) => {
    const plat = new Plats({
        ...req.body, // On décompose toutes les données dans le req.body
    });
    console.log(req.body);
    plat.save() // On enregistre dans la BDD
        .then(() =>
            res.status(201).json({ message: "Le plat vient d'être créé !" })
        )
        .catch((error) => res.status(400).json({ error: error }));
};

// fonction delete pour supprimer un plat
exports.deletePlatById = (req, res, next) => {
    Plats.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Plat supprimé !" }))
        .catch((error) => res.status(400).json({ error }));
};

// fonction put pour modifier un plat
exports.updatePlatById = (req, res, next) => {
    Plats.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: "Plat modifié !" }))
        .catch((error) => res.status(400).json({ error }));
};
