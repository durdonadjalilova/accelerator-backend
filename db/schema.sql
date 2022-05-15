DROP DATABASE IF EXISTS arabic_db;
CREATE DATABASE arabic_db;

\c arabic_db;

CREATE TABLE arabic_letters (
    id SERIAL PRIMARY KEY,
    letter text,
    transliteration text,
    asInEnglishWord text,
    writtenAsFinalForm text,
    writtenAsMedialForm text,
    writtenAsInitialForm text
)

