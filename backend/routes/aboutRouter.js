const express = require("express");
const router = express.Router();
const { getUsersByCategory, getUsers,Assign,Myassign } = require("../controllers/About/AboutController");

router.get("/category", getUsersByCategory);
router.get("/all", getUsers);
router.post("/assign", Assign);
router.post("/myassign", Myassign);

module.exports = router;
