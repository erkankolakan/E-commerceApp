const  router = require("express").Router();
const authController = require("../controllers/authController")

router.post("/login", authController.createUser)
router.post("/register", authController.loginUser)

module.exports= router;

