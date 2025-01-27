const Receptionnistes = require("../models/Receptionnistes.js");

// fonction get pour récupérer tous les receptionnistes
exports.getAllReceptionnistes = (req, res, next) => {
    Receptionnistes.find()
        .then((receptionnistes) => res.status(200).json(receptionnistes))
        .catch((error) => res.status(400).json({ error }));
};

// fonction get pour récupérer un receptionniste
exports.getOneReceptionniste = (req, res, next) => {
    Receptionnistes.findOne({ _id: req.params.id })
        .then((receptionniste) =>
            res.status(200).json({
                id: receptionniste._id,

            })
        )
        .catch((error) => res.status(404).json({ error }));
};

// fonction post pour ajouter un receptionniste
exports.createReceptionniste = (req, res, next) => {
    const receptionniste = new Receptionnistes({
        ...req.body, // On décompose toutes les données dans le req.body
    });
    console.log(req.body);
    receptionniste.save() // On enregistre dans la BDD
        .then(() =>
            res.status(201).json({ message: "Le receptionniste vient d'être créé !" })
        )
        .catch((error) => res.status(400).json({ error: error }));
};

// fonction delete pour supprimer un receptionniste
exports.deleteReceptionnisteById = (req, res, next) => {
    Receptionnistes.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Receptionniste supprimé !" }))
        .catch((error) => res.status(400).json({ error }));
};

// fonction put pour modifier un receptionniste
exports.updateReceptionnisteById = (req, res, next) => {
    Receptionnistes.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: "Receptionniste modifié !" }))
        .catch((error) => res.status(400).json({ error }));
};
