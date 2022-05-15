const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const arabicAlpabetController = require("./controllers/arabicAlphabetController");
app.use("/arab", arabicAlpabetController);

app.get("/", (req, res) => {
  res.send("Welcome to Learn Arabic Alphabet App");
});

module.exports = app;
