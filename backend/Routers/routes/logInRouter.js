const express = require("express");
const logInRouter = express.Router();

const { getDataForLogIn } = require("../controllers/logIn");

logInRouter.get("/:id", getDataForLogIn);



module.exports = {logInRouter};