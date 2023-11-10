require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const userController = require("./controllers/userController");
const awardController = require("./controllers/awardController");
const authentication = require("./middlewares/authentication");
const cors = require("cors");

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/register", userController.register);
app.post("/login", userController.login);
app.get("/awards", authentication, awardController.getAwards);

app.listen(port, () => {
  console.log(`LISTENING TO PORT ${port}`);
});
