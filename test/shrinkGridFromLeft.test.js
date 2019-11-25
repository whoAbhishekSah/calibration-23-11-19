const removeDeadBoundryFromLeft = require("../src/shrinkGridFromLeft");

test("should remove all columns from left which have only dead cells", () => {
  const someGrid = [
    ["▫", "▫", "▦"],
    ["▫", "▫", "▫"],
    ["▫", "▫", "▦"]
  ];
  const expectedGrid = [["▦"], ["▫"], ["▦"]];
  const actualGrid = removeDeadBoundryFromLeft(someGrid);
  expect(actualGrid).toMatchObject(expectedGrid);
});

test("should make the grid empty if all cells are dead", () => {
  const someGrid = [
    ["▫", "▫", "▫"],
    ["▫", "▫", "▫"]
  ];
  const expectedGrid = [];
  const actualGrid = removeDeadBoundryFromLeft(someGrid);
  expect(actualGrid).toMatchObject(expectedGrid);
});

test("should not throw error on empty grid", () => {
  const someGrid = [];
  const expectedGrid = [];
  const actualGrid = removeDeadBoundryFromLeft(someGrid);
  expect(actualGrid).toMatchObject(expectedGrid);
});
