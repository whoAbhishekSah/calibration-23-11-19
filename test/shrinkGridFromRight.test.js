const removeDeadBoundryFromRight = require("../src/shrinkGridFromRight");

test("should remove all columns from right which have only dead cells", () => {
  const someGrid = [
    ["▦", "▫", "▫"],
    ["▫", "▫", "▫"],
    ["▦", "▫", "▫"]
  ];
  const expectedGrid = [["▦"], ["▫"], ["▦"]];
  const actualGrid = removeDeadBoundryFromRight(someGrid);
  expect(actualGrid).toMatchObject(expectedGrid);
});

test("should make the grid empty if all cells are dead", () => {
  const someGrid = [
    ["▫", "▫", "▫"],
    ["▫", "▫", "▫"]
  ];
  const expectedGrid = [];
  const actualGrid = removeDeadBoundryFromRight(someGrid);
  expect(actualGrid).toMatchObject(expectedGrid);
});

test("should not throw error on empty grid", () => {
  const someGrid = [];
  const expectedGrid = [];
  const actualGrid = removeDeadBoundryFromRight(someGrid);
  expect(actualGrid).toMatchObject(expectedGrid);
});
