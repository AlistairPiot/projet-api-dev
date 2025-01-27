const express = require("express");
const router = express.Router();
const serveursCtrl = require("../controllers/serveursController.js");

router.get("/", serveursCtrl.getAllServeurs);

router.post("/", serveursCtrl.createServeur);

router.get("/:id", serveursCtrl.getOneServeur);

router.put("/:id", serveursCtrl.updateServeurById);

router.delete("/:id", serveursCtrl.deleteServeurById);
// // Fin du document
module.exports = router;
