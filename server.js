require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./models");

//db.sequelize.sync();

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop & re-sync database.");
});  

// default route
/*
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});*/

require("./routes/index")(app);

const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}.`);
});