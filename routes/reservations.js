const express = require("express");
const router = express.Router();
const reservationsCtrl = require("../controllers/reservationsController.js");


router.get("/",reservationsCtrl.getAllReservations);

router.post("/", reservationsCtrl.createReservation);

router.get("/:id", reservationsCtrl.getOneReservation);

router.put("/:id", reservationsCtrl.updateReservationById);

router.delete("/:id", reservationsCtrl.deleteReservationById);
// // Fin du document
module.exports = router;