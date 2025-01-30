const express = require("express");
const router = express.Router();
const stocksCtrl = require("../controllers/stocksController.js");
const auth = require("./../middleware/auth.js");
const Stocks = require('../models/Stocks'); // Importation du modèle Stocks


router.get("/",auth, stocksCtrl.getAllStocks);


router.post("/",auth, stocksCtrl.createStock);

router.get("/:id",auth,stocksCtrl.getOneStock);

router.put("/:id",auth, stocksCtrl.updateStockById);

router.delete("/:id",auth, stocksCtrl.deleteStockById);

// route pour obtenier les stocks de faible quantité
router.get('/low-stock/', (req, res, next) => {
    Stocks.find({ quantity: { $lt: 500 } }, (err, lowStockItems) => {
        if (err) {
            res.status(500).json({ message: 'Erreur serveur', error: err });
            return;
        }
        res.json(lowStockItems);
    });
});

// // Fin du document
module.exports = router;