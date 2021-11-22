const express = require("express");
const userRouter = express.Router();

const { getAllInformation, getOneInfo } = require("../controllers/users");

userRouter.get("/", getAllInformation);
userRouter.get("/:id/:name", getOneInfo);

module.exports = { userRouter };
