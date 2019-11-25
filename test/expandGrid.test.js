const expandGrid = require("../src/expandGrid");

test("should expand the grid with dead cells boundry", () => {
  const someGrid = [
    ["▫", "▦"],
    ["▫", "▫"]
  ];
  const expectedGrid = [
    ["▫", "▫", "▫", "▫"],
    ["▫", "▫", "▦", "▫"],
    ["▫", "▫", "▫", "▫"],
    ["▫", "▫", "▫", "▫"]
  ];
  expect(expandGrid(someGrid)).toMatchObject(expectedGrid);
});
