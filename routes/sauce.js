const express = require("express");
const router = express.Router();
//routes

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const validate = require("../middleware/validate-input");
const basicAuth = require("../middleware/basicAuth");

const sauceCtrl = require("../controllers/sauce");

router.get("/", auth, sauceCtrl.getAllSauce);
router.get("/:id", auth, validate.id, sauceCtrl.getSingleSauce);
// router.post("/", auth, multer, sauceCtrl.createSauce);
router.post("/", auth, multer, validate.sauce, sauceCtrl.createSauce);
router.put("/:id", auth, basicAuth, validate.id, validate.sauce, multer, sauceCtrl.updateSauce);
router.delete("/:id", auth, basicAuth, validate.id, sauceCtrl.deleteSauce);
router.post("/:id/like", auth, validate.id, validate.like, sauceCtrl.likeSauce);

module.exports = router;
