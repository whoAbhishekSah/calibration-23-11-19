const expandGrid = require("../src/expandGrid");
const removeDeadBoundryFromTop = require("../src/shrinkGridFromTop");
const removeDeadBoundryFromBottom = require("../src/shrinkGridFromBottom");
const removeDeadBoundryFromLeft = require("../src/shrinkGridFromLeft");
const removeDeadBoundryFromRight = require("../src/shrinkGridFromRight");

function isValidCell(x, y, row, column) {
  return x >= 0 && x < row && y >= 0 && y < column;
}

function isAliveCell(grid, i, j) {
  return grid[i][j] === "▦";
}

function aliveNeighboursCount(grid, x, y) {
  const row = grid.length;
  const column = grid[0].length;
  let result = 0;
  if (isValidCell(x - 1, y - 1, row, column) && isAliveCell(grid, x - 1, y - 1))
    result += 1;
  if (isValidCell(x - 1, y, row, column) && isAliveCell(grid, x - 1, y))
    result += 1;
  if (isValidCell(x - 1, y + 1, row, column) && isAliveCell(grid, x - 1, y + 1))
    result += 1;
  if (isValidCell(x, y - 1, row, column) && isAliveCell(grid, x, y - 1))
    result += 1;
  if (isValidCell(x, y + 1, row, column) && isAliveCell(grid, x, y + 1))
    result += 1;
  if (isValidCell(x + 1, y - 1, row, column) && isAliveCell(grid, x + 1, y - 1))
    result += 1;
  if (isValidCell(x + 1, y, row, column) && isAliveCell(grid, x + 1, y))
    result += 1;
  if (isValidCell(x + 1, y + 1, row, column) && isAliveCell(grid, x + 1, y + 1))
    result += 1;
  return result;
}

function deepCopyGrid(grid) {
  const row = grid.length;
  const column = grid[0].length;
  const copyOfGrid = [];
  for (let i = 0; i < row; i += 1) {
    copyOfGrid.push([]);
    for (let j = 0; j < column; j += 1) {
      copyOfGrid[i].push(grid[i][j]);
    }
  }
  return copyOfGrid;
}

function removeDeadBoundry(grid) {
  removeDeadBoundryFromTop(grid);
  removeDeadBoundryFromBottom(grid);
  removeDeadBoundryFromLeft(grid);
  removeDeadBoundryFromRight(grid);
  return grid;
}

function nextGeneration(currentGrid) {
  const currentExpandedGrid = expandGrid(currentGrid);
  const nextExpandedGrid = deepCopyGrid(currentExpandedGrid);
  const row = nextExpandedGrid.length;
  const column = nextExpandedGrid[0].length;
  for (let i = 0; i < row; i += 1) {
    for (let j = 0; j < column; j += 1) {
      if (
        currentExpandedGrid[i][j] === "▦" &&
        (aliveNeighboursCount(currentExpandedGrid, i, j) < 2 ||
          aliveNeighboursCount(currentExpandedGrid, i, j) > 3)
      ) {
        nextExpandedGrid[i][j] = "▫";
      } else if (
        currentExpandedGrid[i][j] === "▫" &&
        aliveNeighboursCount(currentExpandedGrid, i, j) === 3
      ) {
        nextExpandedGrid[i][j] = "▦";
      }
    }
  }
  return removeDeadBoundry(nextExpandedGrid);
}

module.exports = nextGeneration;
