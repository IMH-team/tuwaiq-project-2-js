const express = require("express");
const userRouter = express.Router();

const { getAllInformation } = require("../controllers/users");

userRouter.get("/", getAllInformation);

module.exports = { userRouter };
