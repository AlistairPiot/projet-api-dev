const Commandes = require ("../models/Commandes.js");

// fonction get pour récupérer toutes les commandes
exports.getAllCommandes = (req,res,next) => {
    Commandes.find()
        .then((commandes) => res.status(200).json(commandes))
        .catch((error) => res.status(400).json({error}));
};

// fonction get pour récupérer une commande
exports.getOneCommande = (req, res, next) => {
    Commandes.findOne({_id: req.params.id })
        .then(commande =>
            res.status((200).json({
                id: commande._id,
                numero_commande: commande.numero_commande,
                statut: commande.statut,
            })        
        )
    )
        .catch((error) => res.status(404).json({ error }));
};

// fonction post pour ajouter une commande
exports.createCommande = (req,res, next)=> {
    const commande = new Commandes({
        ...req.body, // On décompose toutes les données dans le req.body
    });
    commande.save() // On enregistre dans la BDD
        .then(() =>
            res.status(201).json({ "message : La commande vient d'être crée"})
            )
            .catch((error) => res.status(400).json({ error: error }));
};

// fonction delete pour supprimer une commande
exports.deleteCommandeById = (req, res, next) => {
    Commandes.deleteOne({_id: req.params.id })
        .then(() => res.status(200).json({ message : "Commande supprimée !"}))
        .catch((error) => res.status(400).json({ error }));

};

// fonction put pour modifier une commande
exports.updateCommandeById = (req, res, next) => {
    Commandes.updateOne({_id: req.params.id }, {...req.body, id_:req.params.id})
        .then(() => res.status(200).json({ message: "Commande modifiéé !" }))
        .catch((error) => res.status(400).json({ error}));
};