const express = require("express");
const router = express.Router();
const adminsCtrl = require("../controllers/adminsController.js");

router.get("/", adminsCtrl.getAllAdmins);

router.post("/", adminsCtrl.createAdmin);

router.get("/:id", adminsCtrl.getOneAdmin);

router.put("/:id", adminsCtrl.updateAdminById);

router.delete("/:id", adminsCtrl.deleteAdminById);
// // Fin du document
module.exports = router;
