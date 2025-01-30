const express = require("express");
const router = express.Router();
const chefsCtrl = require("../controllers/chefsController.js");
const auth = require("./../middleware/auth.js");


router.get("/", auth, chefsCtrl.getAllChefs);

router.post("/",auth,  chefsCtrl.createChef);

router.get("/:id",auth, chefsCtrl.getOneChef);

router.put("/:id", auth, chefsCtrl.updateChefById);

router.delete("/:id", auth, chefsCtrl.deleteChefById);
// // Fin du document
module.exports = router;
