const express = require("express");
const cors = require("cors");
const { users } = require("../Data/users");

const app = express();

//routers

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:userId", (req, res) => {
  const user = users.find((user) => user.userId === req.params.userId);
  res.send(user);
});

//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
