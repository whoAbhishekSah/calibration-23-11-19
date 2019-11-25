const removeDeadBoundryFromTop = require("../src/shrinkGridFromTop");

test("should remove all rows from top which have only dead cells", () => {
  const someGrid = [
    ["▫", "▫", "▫"],
    ["▫", "▫", "▫"],
    ["▦", "▦", "▦"]
  ];
  const expectedGrid = [["▦", "▦", "▦"]];
  const actualGrid = removeDeadBoundryFromTop(someGrid);
  expect(actualGrid).toMatchObject(expectedGrid);
});

test("should make the grid empty if all cells are dead", () => {
  const someGrid = [
    ["▫", "▫", "▫"],
    ["▫", "▫", "▫"]
  ];
  const expectedGrid = [];
  const actualGrid = removeDeadBoundryFromTop(someGrid);
  expect(actualGrid).toMatchObject(expectedGrid);
});

test("should not throw error on empty grid", () => {
  const someGrid = [];
  const expectedGrid = [];
  const actualGrid = removeDeadBoundryFromTop(someGrid);
  expect(actualGrid).toMatchObject(expectedGrid);
});
