const express = require("express");
const router = express.Router();
const reservationsCtrl = require("../controllers/reservationsController.js");


router.get("/",reservationsCtrl.getAllReservations);

router.post("/", reservationsCtrl.createReservationsById);

router.get("/:id", reservationsCtrl.getOneReservations);

router.put("/:id", reservationsCtrl.updateReservationsById);

router.delete("/:id", reservationsCtrl.deleteReservationsById);
// // Fin du document
module.exports = router;