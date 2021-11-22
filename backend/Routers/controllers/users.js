const { users } = require("../../Data/UserInfoDB");

const getAllInformation = (req, res) => {
  res.send(users);
};

const getOneInfo = (req, res) => {
  const user = users.find((u) => u.userId === req.params.id);
  const infoName = req.params.name;
  res.send(user.userInfo[infoName]);
};

module.exports = { getAllInformation, getOneInfo };
