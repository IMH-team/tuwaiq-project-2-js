const { LoginUser } = require("../../Data/LoginDB");

const getAllUsers = (req, res) => {
  res.send(LoginUser);
};

const changeHealthStatus = (req, res) => {
  const user = LoginUser.find((elem) => elem.userId === req.params.id);
  user.healthStatus = req.body.healthStatus;
  res.send(user);
};

const changePassword = (req, res) => {
  const user = LoginUser.find((elem) => elem.userId === req.query.id);
  user.password = req.body.password;
  res.send(user);
};

const getDataForLogIn = (req, res) => {
  console.log(req.body);
  console.log(LoginUser);

  const foundUser = LoginUser.find(
    ({ userId, password }) =>
      userId === req.body.userId && password === req.body.password
  );
  console.log(foundUser);
  if (foundUser) res.send(foundUser);
  else
    res.status(404).send("NationalId and Password you entered is Wrong !!!.");
};

module.exports = {
  getDataForLogIn,
  getAllUsers,
  changeHealthStatus,
  changePassword,
};
