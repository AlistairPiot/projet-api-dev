const express = require("express");
const router = express.Router();
const commandesCtrl = require("../controllers/commandesController.js");
const auth = require("./../middleware/auth.js");


router.get("/", auth, commandesCtrl.getAllCommandes);

router.post("/",auth, commandesCtrl.createCommande);

router.get("/:id",auth, commandesCtrl.getOneCommande);

router.put("/:id",auth, commandesCtrl.updateCommandeById);

router.delete("/:id",auth, commandesCtrl.deleteCommandeById);
// // Fin du document
module.exports = router;
