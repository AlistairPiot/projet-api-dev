const express = require("express");
const router = express.Router();
const usersCtrl = require("../controllers/usersController.js");
const auth = require("./../middleware/auth.js");


router.get("/", auth, usersCtrl.getAllUsers);

router.post("/", usersCtrl.createUser);

router.get("/:id", usersCtrl.getOneUser);

router.put("/:id",auth, usersCtrl.updateUserById);

router.delete("/:id", auth, usersCtrl.deleteUserById);

<<<<<<< HEAD
router.post("/signup", usersCtrl.signUpUser);

router.post("/login", usersCtrl.loginUser);
=======
// router.post("/signup", userCtrl.signUpUser);

// router.post("/login", userCtrl.loginUser);
>>>>>>> d5877b59f01c4af0c1f311136bb24a7adde28385
// // Fin du document
module.exports = router;
