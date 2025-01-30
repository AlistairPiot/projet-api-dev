const express = require("express");
const router = express.Router();
const reservationsCtrl = require("../controllers/reservationsController.js");
const auth = require("./../middleware/auth.js");



router.get("/",auth, reservationsCtrl.getAllReservations);

router.post("/",auth, reservationsCtrl.createReservation);

router.get("/:id",auth, reservationsCtrl.getOneReservation);

router.put("/:id",auth,reservationsCtrl.updateReservationById);

router.delete("/:id",auth, reservationsCtrl.deleteReservationById);
// // Fin du document
module.exports = router;