const express = require("express");
const router = express.Router();
const chefsCtrl = require("../controllers/chefsController.js");

router.get("/", chefsCtrl.getAllChefs);

router.post("/", chefsCtrl.createChef);

router.get("/:id", chefsCtrl.getOneChef);

router.put("/:id", chefsCtrl.updateChefById);

router.delete("/:id", chefsCtrl.deleteChefById);
// // Fin du document
module.exports = router;
