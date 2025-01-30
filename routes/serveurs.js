const express = require("express");
const router = express.Router();
const serveursCtrl = require("../controllers/serveursController.js");
const auth = require("./../middleware/auth.js");

router.get("/",auth, serveursCtrl.getAllServeurs);

router.post("/",auth, serveursCtrl.createServeur);

router.get("/:id",auth, serveursCtrl.getOneServeur);

router.put("/:id",auth, serveursCtrl.updateServeurById);

router.delete("/:id",auth, serveursCtrl.deleteServeurById);
// // Fin du document
module.exports = router;
