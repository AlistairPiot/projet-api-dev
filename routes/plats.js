const express = require("express");
const router = express.Router();
const platsCtrl = require("../controllers/platsController.js");
const auth = require("./../middleware/auth.js");

router.get("/", platsCtrl.getAllPlats);

router.post("/", auth, platsCtrl.createPlat);

router.get("/:id", platsCtrl.getOnePlat);

router.put("/:id", auth, platsCtrl.updatePlatById);

router.delete("/:id", auth, platsCtrl.deletePlatById);
// // Fin du document
module.exports = router;
