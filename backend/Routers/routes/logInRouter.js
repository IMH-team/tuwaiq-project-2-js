const express = require("express");
const logInRouter = express.Router();

const {
  getDataForLogIn,
  getAllUsers,
  changeHealthStatus,
  changePassword,
} = require("../controllers/logIn");

logInRouter.post("/", getDataForLogIn);
logInRouter.get("/", getAllUsers);
logInRouter.put("/:id", changeHealthStatus);
logInRouter.put("/", changePassword);

module.exports = { logInRouter };
