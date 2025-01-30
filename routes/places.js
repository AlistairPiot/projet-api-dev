const express = require("express");
const router = express.Router();
const placesCtrl = require("../controllers/placesController.js");
const auth = require("../middleware/auth.js");

router.get("/",auth, placesCtrl.getAllPlaces);

router.post("/",auth, placesCtrl.createPlace);

router.get("/:id",auth, placesCtrl.getOnePlace);

router.put("/:id",auth, placesCtrl.updatePlaceById);

router.delete("/:id",auth, placesCtrl.deletePlaceById);
// // Fin du document
module.exports = router;
