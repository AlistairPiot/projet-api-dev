const express = require("express");
const router = express.Router();
const receptionnistesCtrl = require("../controllers/receptionnistesController.js");
const auth = require("../middleware/auth.js");

router.get("/",auth, receptionnistesCtrl.getAllReceptionnistes);

router.post("/",auth, receptionnistesCtrl.createReceptionniste);

router.get("/:id",auth, receptionnistesCtrl.getOneReceptionniste);

router.put("/:id",auth, receptionnistesCtrl.updateReceptionnisteById);

router.delete("/:id",auth, receptionnistesCtrl.deleteReceptionnisteById);
// // Fin du document
module.exports = router;
