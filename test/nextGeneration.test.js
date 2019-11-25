const nextGeneration = require("../src/nextGeneration");

test("should kill alive cell by underpopulation", () => {
  const currentGrid = [
    ["▫", "▦"],
    ["▫", "▫"]
  ];
  const expectedNextGrid = [
    ["▫", "▫"],
    ["▫", "▫"]
  ];
  const actualNextGrid = nextGeneration(currentGrid);
  expect(actualNextGrid).toMatchObject(expectedNextGrid);
});

test("should kill alive cell by overpopulation", () => {
  const currentGrid = [
    ["▦", "▦", "▦"],
    ["▦", "▦", "▦"]
  ];
  const expectedNextGrid = [
    ["▦", "▫", "▦"],
    ["▦", "▫", "▦"]
  ];
  const actualNextGrid = nextGeneration(currentGrid);
  expect(actualNextGrid).toMatchObject(expectedNextGrid);
});
