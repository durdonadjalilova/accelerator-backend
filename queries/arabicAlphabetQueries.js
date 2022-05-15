const db = require("../db/dbconfig");

const getAllLetters = async () => {
  return await db.any("SELECT * FROM arabic_letters");
};

const getOneLetter = async (id) => {
  return await db.one("SELECT * FROM arabic_letters WHERE id=$1", [id]);
};

module.exports = { getAllLetters, getOneLetter };
