const express = require("express");
const cors = require("cors");
const app = express();

const { userRouter } = require("./Routers/routes/userRouter");
const { logInRouter } = require("./Routers/routes/logInRouter");
const { permissionsRouter } = require("./Routers/routes/permissionsRouter");

//routers

//built-in middlewares
app.use(express.json());
app.use("/users", userRouter);
app.use("/users", userRouter);

//log in
app.use("/logIn", logInRouter);

// permissions
app.use("/permissions", permissionsRouter);
app.use("/permissions", permissionsRouter);

//third-party middleware
app.use(cors());

//app routers

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
