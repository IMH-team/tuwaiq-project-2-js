const express = require("express");
const cors = require("cors");
const app = express();

const { userRouter } = require("./Routers/routes/userRouter");
const { logInRouter } = require("./Routers/routes/logInRouter");




//routers

//built-in middlewares
app.use(express.json());
app.use("/users", userRouter);

//log in 
app.use("/logIn",logInRouter )


//third-party middleware
app.use(cors());

//app routers

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
