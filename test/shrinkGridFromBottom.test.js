const removeDeadBoundryFromBottom = require("../src/shrinkGridFromBottom");

test("should remove all rows from top which have only dead cells", () => {
  const someGrid = [
    ["▦", "▦", "▦"],
    ["▫", "▫", "▫"],
    ["▫", "▫", "▫"]
  ];
  const expectedGrid = [["▦", "▦", "▦"]];
  const actualGrid = removeDeadBoundryFromBottom(someGrid);
  expect(actualGrid).toMatchObject(expectedGrid);
});

test("should make the grid empty if all cells are dead", () => {
  const someGrid = [
    ["▫", "▫", "▫"],
    ["▫", "▫", "▫"]
  ];
  const expectedGrid = [];
  const actualGrid = removeDeadBoundryFromBottom(someGrid);
  expect(actualGrid).toMatchObject(expectedGrid);
});

test("should not throw error on empty grid", () => {
  const someGrid = [];
  const expectedGrid = [];
  const actualGrid = removeDeadBoundryFromBottom(someGrid);
  expect(actualGrid).toMatchObject(expectedGrid);
});
