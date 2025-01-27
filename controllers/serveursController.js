const Serveurs = require("../models/Serveurs.js");

// fonction get pour récupérer tous les serveurs
exports.getAllServeurs = (req, res, next) => {
    Serveurs.find()
        .then((serveurs) => res.status(200).json(serveurs))
        .catch((error) => res.status(400).json({ error }));
};

// fonction get pour récupérer un serveur
exports.getOneServeur = (req, res, next) => {
    Serveurs.findOne({ _id: req.params.id })
        .then((serveur) =>
            res.status(200).json({
                id: serveur._id,
                nom: serveur.name,
                description: serveur.description,
                prix: serveur.prix,
                specialite: serveur.specialite,
            })
        )
        .catch((error) => res.status(404).json({ error }));
};

// fonction post pour ajouter un serveur
exports.createServeur = (req, res, next) => {
    const serveur = new Serveurs({
        ...req.body, // On décompose toutes les données dans le req.body
    });
    console.log(req.body);
    serveur.save() // On enregistre dans la BDD
        .then(() =>
            res.status(201).json({ message: "Le serveur vient d'être créé !" })
        )
        .catch((error) => res.status(400).json({ error: error }));
};

// fonction delete pour supprimer un serveur
exports.deleteServeurById = (req, res, next) => {
    Serveurs.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Serveur supprimé !" }))
        .catch((error) => res.status(400).json({ error }));
};

// fonction put pour modifier un serveur
exports.updateServeurById = (req, res, next) => {
    Serveurs.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: "Serveur modifié !" }))
        .catch((error) => res.status(400).json({ error }));
};
