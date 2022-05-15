const express = require("express");
const arab = express.Router();

// const arabicLetters = require("../arabicAlphabet.json");

const {
  getAllLetters,
  getOneLetter,
} = require("../queries/arabicAlphabetQueries");

arab.get("/", async (request, response) => {
  let letters = await getAllLetters();
  // let letters = arabicLetters.arabicAlphabet;
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

arab.get("/:id", async (request, response) => {
  const letterId = request.params.id;
  // let letters = arabicLetters.arabicAlphabet;
  const singleLetter = await getOneLetter(letterId);
  // const singleLetter = letters.find((letter) => letter.id === letterId);
  response.json(singleLetter);
});

module.exports = arab;
