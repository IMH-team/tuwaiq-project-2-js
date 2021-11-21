const { users } = require("../../../Data/UserInfoDB");

const getAllInformation = (req, res) => {
  const user = users.map((user) => {
    res.send(user.userInfo);
  });
};

const getOneInfo = (req, res) => {
  const user = users.map((user) => {
    const info = req.params.Info;
    user.userInfo.hasOwnProperty(info)
  });
};

module.exports = { getAllInformation, getOneInfo };
