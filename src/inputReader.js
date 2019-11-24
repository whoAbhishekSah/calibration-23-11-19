const fs = require("fs");

function readInputFile(fileName) {
  return fs
    .readFileSync(fileName, "utf-8")
    .split("\n")
    .map(item => item.split(""));
}
module.exports = readInputFile;
