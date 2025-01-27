const express = require("express");
const router = express.Router();
const placesCtrl = require("../controllers/placesController.js");

router.get("/", placesCtrl.getAllPlaces);

router.post("/", placesCtrl.createPlace);

router.get("/:id", placesCtrl.getOnePlace);

router.put("/:id", placesCtrl.updatePlaceById);

router.delete("/:id", placesCtrl.deletePlaceById);
// // Fin du document
module.exports = router;
