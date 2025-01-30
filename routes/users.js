const express = require("express");
const router = express.Router();
const usersCtrl = require("../controllers/usersController.js");
const auth = require("./../middleware/auth.js");


router.get("/", auth, usersCtrl.getAllUsers);

router.post("/", usersCtrl.createUser);

router.get("/:id", usersCtrl.getOneUser);

router.put("/:id",auth, usersCtrl.updateUserById);

router.delete("/:id", auth, usersCtrl.deleteUserById);

router.post("/signup", usersCtrl.signUpUser);

router.post("/login", usersCtrl.loginUser);
// // Fin du document
module.exports = router;
