const express = require("express");
const router = express.Router();
const commandesCtrl = require("../controllers/commandesController.js");

router.get("/", commandesCtrl.getAllCommandes);

router.post("/", commandesCtrl.createCommande);

router.get("/:id", commandesCtrl.getOneCommande);

router.put("/:id", commandesCtrl.updateCommandeById);

router.delete("/:id", commandesCtrl.deleteCommandeById);
// // Fin du document
module.exports = router;
