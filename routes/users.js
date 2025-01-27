const express = require("express");
const router = express.Router();
const usersCtrl = require("../controllers/usersController.js");

router.get("/", usersCtrl.getAllUsers);

router.post("/", usersCtrl.createUser);

router.get("/:id", usersCtrl.getOneUser);

router.put("/:id", usersCtrl.updateUserById);

router.delete("/:id", usersCtrl.deleteUserById);
// // Fin du document
module.exports = router;
