const Users = require("../models/Users.js");

// fonction get pour récupérer tous les users
exports.getAllUsers = (req, res, next) => {
    Users.find()
        .then((users) => res.status(200).json(users))
        .catch((error) => res.status(400).json({ error }));
};

// fonction get pour récupérer un user
exports.getOneUser = (req, res, next) => {
    Users.findOne({ _id: req.params.id })
        .then(user =>
            res.status(200).json({
                id: user._id,
                nom: user.name,
                prenom: user.first_name,
                emai: user.email,
                mot_de_passe : user.password,
            })
        )
        .catch((error) => res.status(404).json({ error }));
};

// fonction post pour ajouter un user
exports.createUser = (req, res, next) => {
    const user = new Users({
        ...req.body, // On décompose toutes les données dans le req.body
    });
    user.save() // On enregistre dans la BDD
        .then(() =>
            res.status(201).json({ message: "Le user vient d'être créé !" })
        )
        .catch((error) => res.status(400).json({ error: error }));
};

// fonction delete pour supprimer un user
exports.deleteUserById = (req, res, next) => {
    Users.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "User supprimé !" }))
        .catch((error) => res.status(400).json({ error }));
};

// fonction put pour modifier un user
exports.updateUserById = (req, res, next) => {
    Users.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: "User modifié !" }))
        .catch((error) => res.status(400).json({ error }));
};
