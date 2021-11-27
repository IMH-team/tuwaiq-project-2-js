const express = require("express");
const logInRouter = express.Router();

const { getDataForLogIn } = require("../controllers/logIn");

logInRouter.get("/", getDataForLogIn);



module.exports = {logInRouter};