const express = require("express");
const router = express.Router();
const stocksCtrl = require("../controllers/stocksController.js");


router.get("/",stocksCtrl.getAllStocks);

router.post("/", stocksCtrl.createStock);

router.get("/:id", stocksCtrl.getOneStock);

router.put("/:id", stocksCtrl.updateStockById);

router.delete("/:id", stocksCtrl.deleteStockById);
// // Fin du document
module.exports = router;