// const express = require("express");
// const router = express.Router();
// const platsCtrl = require("../controllers/platsController.js");

// router.get("/", platsCtrl.getAllPlats);

router.post("/", platsCtrl.createPlatById);

// router.get("/:id", platsCtrl.getOnePlat);

// router.put("/:id", platsCtrl.updatePlatById);

// router.delete("/:id", platsCtrl.deletePlatById);
// // // Fin du document
// module.exports = router;
