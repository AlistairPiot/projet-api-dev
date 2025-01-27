const Admins = require("../models/Admins.js");

// fonction get pour récupérer tous les admins
exports.getAllAdmins = (req, res, next) => {
    Admins.find()
        .then((admins) => res.status(200).json(admins))
        .catch((error) => res.status(400).json({ error }));
};

// fonction get pour récupérer un admin
exports.getOneAdmin = (req, res, next) => {
    Admins.findOne({ _id: req.params.id })
        .then(admin =>
            res.status(200).json({
                id: admin._id,
                role: admin.role,
                permissions : admin.permissions,
        
            })
        )
        .catch((error) => res.status(404).json({ error }));
};

// fonction post pour ajouter un admin
exports.createAdmin = (req, res, next) => {
    const admin = new Admins({
        ...req.body, // On décompose toutes les données dans le req.body
    });
    admin.save() // On enregistre dans la BDD
        .then(() =>
            res.status(201).json({ message: "L' admin vient d'être créé !" })
        )
        .catch((error) => res.status(400).json({ error: error }));
};

// fonction delete pour supprimer un admin
exports.deleteAdminById = (req, res, next) => {
    Admins.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Admin supprimé !" }))
        .catch((error) => res.status(400).json({ error }));
};

// fonction put pour modifier un Admin
exports.updateAdminById = (req, res, next) => {
    Admins.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: "Admin modifié !" }))
        .catch((error) => res.status(400).json({ error }));
};
