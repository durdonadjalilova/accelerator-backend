const express = require("express");
const arab = express.Router();

const arabicLetters = require("../arabicAlphabet.json");

arab.get("/", (request, response) => {
  let letters = arabicLetters.arabicAlphabet;
  let { start, end } = request.query;
  start = Number(start);
  end = Number(end);

  if (start && end) {
    letters = letters.filter(
      (letter) => letter.id >= start && letter.id <= end
    );
  }
  response.json(letters);
});

arab.get("/:id", (request, response) => {
  const letterId = request.params.id;
  let letters = arabicLetters.arabicAlphabet;

  const singleLetter = letters.find((letter) => letter.id === letterId);
  response.json(singleLetter);
});

module.exports = arab;
