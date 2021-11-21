const express = require("express");
const userRouter = express.Router();

const { getAllInformation, getOneInfo } = require("../controllers/users");

userRouter.get("/", getAllInformation);
userRouter.get("/:Info", getOneInfo);

module.exports = { userRouter };
