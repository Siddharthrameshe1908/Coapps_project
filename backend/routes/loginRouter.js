const express = require("express");
const router = express.Router();
const { userLogin,userSignUp} = require("../controllers/loginController");

router.post("/signin", userLogin);
router.post("/signup", userSignUp);
//authen

module.exports = router;
