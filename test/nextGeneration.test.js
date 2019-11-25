const nextGeneration = require("../src/nextGeneration");

test("should kill alive cell by underpopulation", () => {
  const currentGrid = [
    ["▫", "▦"],
    ["▫", "▫"]
  ];
  const expectedNextGrid = [];
  const actualNextGrid = nextGeneration(currentGrid);
  expect(actualNextGrid).toMatchObject(expectedNextGrid);
});

test("should kill alive cell by overpopulation", () => {
  const currentGrid = [
    ["▦", "▦", "▦"],
    ["▦", "▦", "▦"]
  ];
  const expectedNextGrid = [
    ["▫", "▦", "▫"],
    ["▦", "▫", "▦"],
    ["▦", "▫", "▦"],
    ["▫", "▦", "▫"]
  ];
  const actualNextGrid = nextGeneration(currentGrid);
  expect(actualNextGrid).toMatchObject(expectedNextGrid);
});

test("should make dead cell alive by reproduction", () => {
  const currentGrid = [
    ["▫", "▦"],
    ["▦", "▦"]
  ];
  const expectedNextGrid = [
    ["▦", "▦"],
    ["▦", "▦"]
  ];
  const actualNextGrid = nextGeneration(currentGrid);
  expect(actualNextGrid).toMatchObject(expectedNextGrid);
});

test("should expand and shrink the grid properly", () => {
  const currentGrid = [
    ["▫", "▦", "▫"],
    ["▫", "▫", "▦"],
    ["▦", "▦", "▦"]
  ];
  const expectedNextGrid = [
    ["▦", "▫", "▦"],
    ["▫", "▦", "▦"],
    ["▫", "▦", "▫"]
  ];
  const actualNextGrid = nextGeneration(currentGrid);
  expect(actualNextGrid).toMatchObject(expectedNextGrid);
});
