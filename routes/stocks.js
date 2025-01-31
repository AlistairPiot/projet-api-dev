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


// // Fin du document
module.exports = router;