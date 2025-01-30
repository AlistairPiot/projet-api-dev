const express = require("express");
const router = express.Router();
const adminsCtrl = require("../controllers/adminsController.js");
const auth = require("./../middleware/auth.js");


router.get("/",auth, adminsCtrl.getAllAdmins);

router.post("/",auth, adminsCtrl.createAdmin);

router.get("/:id", adminsCtrl.getOneAdmin);

router.put("/:id",auth, adminsCtrl.updateAdminById);

router.delete("/:id",auth, adminsCtrl.deleteAdminById);
// // Fin du document
module.exports = router;
