const express = require("express");
const router = express.Router();
const platsCtrl = require("../controllers/platsController.js");


router.get("/",platsCtrl.getAllplats);

router.post("/", platsCtrl.createPlatsById);

router.get("/:id", platsCtrl.getOnePlats);

router.put("/:id", platsCtrl.updatePlatsById);

router.delete("/:id", platsCtrl.deletePlatsById);
// // Fin du document
module.exports = router;