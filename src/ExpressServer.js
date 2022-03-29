// Express server on port 3000
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// loop through the integer array and return the sum of all the elements
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// convert a string from camelCase to snake_case
function camelToSnake(str) {
  return str.replace(/[A-Z]/g, (letter) => "_" + letter.toLowerCase());
}
