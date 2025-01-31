const Stocks = require("../models/Stocks.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// fonction get pour récupérer tous les stocks
exports.getAllStocks = (req, res, next) => {
    Stocks.find()
        .then((stocks) => res.status(200).json(stocks))
        .catch((error) => res.status(400).json({ error }));
};
// exports.getAllStocks = (req, res, next) => {
//     let query = {}; // Objet de requête dynamique

//     // Ajouter un filtre sur la quantité si elle est fournie
//     if (req.query.quantity) {
//         query.quantity = { $lt: parseInt(req.query.quantity) };
//     }

//     // Ajouter un filtre par nom (ex: ?name=ProduitX)
//     if (req.query.name_ingredient) {
//         query.name_ingredient = new RegExp(req.query.name_ingredient, 'i'); // Recherche insensible à la casse
//     }

//     Stock.find(query, (err, stocks) => {
//         if (err) {
//             return res.status(500).json({ message: "Erreur serveur", error: err });
//         }
//         res.json(stocks);
//     });
// };
// fonction get pour récupérer un stock
exports.getOneStock = (req, res, next) => {
    Stocks.findOne({ _id: req.params.id })
        .then((stock) =>
            res.status(200).json({
                id: stock._id,
                nom: stock.name_ingredient,
                quantite: stock.quantity,
            })
        )
        .catch((error) => res.status(404).json({ error }));
};

// fonction post pour ajouter un stock
exports.createStock = (req, res, next) => {
    const stock = new Stocks({
        ...req.body, // On décompose toutes les données dans le req.body
    });
    stock
        .save() // On enregistre dans la BDD
        .then(() =>
            res.status(201).json({ message: "Le stock vient d'être créé !" })
        )
        .catch((error) => res.status(400).json({ error: error }));
};

// fonction delete pour supprimer un stock
exports.deleteStockById = (req, res, next) => {
    Stocks.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "Stock supprimé !" }))
        .catch((error) => res.status(400).json({ error }));
};

// fonction put pour modifier un Stock
exports.updateStockById = (req, res, next) => {
    Stocks.updateOne(
        { _id: req.params.id },
        { ...req.body, _id: req.params.id }
    )
        .then(() => res.status(200).json({ message: "Stock modifié !" }))
        .catch((error) => res.status(400).json({ error }));
};

