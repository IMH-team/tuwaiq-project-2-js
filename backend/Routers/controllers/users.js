const { users } = require("../../../Data/UserInfoDB");

const getAllUsers = (req, res) => {
  users.map((user) => {
    res.send(user.userInfo);
  });
};

module.exports = { getAllUsers };