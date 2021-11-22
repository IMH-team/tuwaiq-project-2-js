const {LoginUser}= require("../../../Data/LoginDB");

const getDataForLogIn= (req,res)=>{
    const getDatatoLogIn= LoginUser.find((ele)=>{
      return  ele.userId=== req.params.id
       
    })
    res.send(getDatatoLogIn)
    
//     const getInformation= (req,res)=>{
//         res.send(LoginUser)
      
}
module.exports={getDataForLogIn}
