const Chefs = require("../models/Chefs.js");

// fonction get pour récupérer tous les chefs
exports.getAllChefs = (req, res, next) => {
    Chefs.find()
        .then((chefs) => res.status(200).json(chefs))
        .catch((error) => res.status(400).json({ error }));
};

// fonction get pour récupérer un chef
exports.getOneChef = (req, res, next) => {
    Chefs.findOne({ _id: req.params.id })
        .then((chef) =>
            res.status(200).json({
                id: chef._id,

            })
        )
        .catch((error) => res.status(404).json({ error }));
};

// fonction post pour ajouter un chef
exports.createChef = (req, res, next) => {
    const chef = new Chefs({
        ...req.body, // On décompose toutes les données dans le req.body
    });
    console.log(req.body);
    chef.save() // On enregistre dans la BDD
        .then(() =>
            res.status(201).json({ message: "Le chef vient d'être créé !" })
        )
        .catch((error) => res.status(400).json({ error: error }));
};

// fonction delete pour supprimer un chef
exports.deleteChefById = (req, res, next) => {
    Chefs.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Chef supprimé !" }))
        .catch((error) => res.status(400).json({ error }));
};

// fonction put pour modifier un chef
exports.updateChefById = (req, res, next) => {
    Chefs.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: "Chef modifié !" }))
        .catch((error) => res.status(400).json({ error }));
};
