const fs = require("fs");
const readInputFile = require("../src/inputReader");

const testInputFile = "testInput.txt";
const stringToWrite = "▫▦\n▫▫";

beforeEach(() => {
  fs.writeFileSync(testInputFile, stringToWrite);
});

test("should read input file correctly", () => {
  const expected = [
    ["▫", "▦"],
    ["▫", "▫"]
  ];
  const actual = readInputFile(`${testInputFile}`);
  expect(actual).toMatchObject(expected);
});

afterEach(() => {
  fs.unlinkSync(testInputFile);
});
