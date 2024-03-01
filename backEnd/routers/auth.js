const  router = require("express").Router();
const authController = require("../controllers/authController")

router.post("/login", authController.loginUser)
router.post("/register", authController.createUser)

module.exports= router;

