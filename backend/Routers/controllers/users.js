const users = require("../../../Data/UserInfoDB");

const getAllUsers = (req, res) => {
  res.send(users);
};

module.exports = { getAllUsers };
