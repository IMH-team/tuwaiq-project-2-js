const {LoginUser}= require("../../Data/LoginDB");

// const getDataForLogIn= (req,res)=>{
   
//   res.send(LoginUser)    
// }

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
module.exports={getDataForLogIn}
