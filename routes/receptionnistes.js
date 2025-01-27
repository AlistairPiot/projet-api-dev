const express = require("express");
const router = express.Router();
const receptionnistesCtrl = require("../controllers/receptionnistesController.js");

router.get("/", receptionnistesCtrl.getAllReceptionnistes);

router.post("/", receptionnistesCtrl.createReceptionniste);

router.get("/:id", receptionnistesCtrl.getOneReceptionniste);

router.put("/:id", receptionnistesCtrl.updateReceptionnisteById);

router.delete("/:id", receptionnistesCtrl.deleteReceptionnisteById);
// // Fin du document
module.exports = router;
