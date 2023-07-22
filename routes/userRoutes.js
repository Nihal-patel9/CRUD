const express = require("express");

const { home, createUser, getUsers, deleteUser, editUser} = require("../controllers/userControllers.js");

const router = express.Router();

router.get("/", home);
router.post("/createUser", createUser);
router.get("/getUsers", getUsers);
router.delete("/deleteuser/:id", deleteUser);
router.put("/edituser/:id", editUser);

module.exports = router;