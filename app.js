const express = require("express");
const cors = require("cors");
const app = express();

const arabicAlpabetController = require("./controllers/arabicAlphabetController");
app.get("/", (req, res) => {
  res.send("Welcome to Learn Arabic Alphabet App");
});

app.use(cors());
app.use("/arab", arabicAlpabetController);
module.exports = app;
