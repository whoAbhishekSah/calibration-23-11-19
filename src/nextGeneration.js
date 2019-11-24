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

function nextGeneration(currentGrid) {
  const nextGrid = Array.from(currentGrid);
  const row = nextGrid.length;
  const column = nextGrid[0].length;
  for (let i = 0; i < row; i += 1) {
    for (let j = 0; j < column; j += 1) {
      if (
        currentGrid[i][j] === "▦" &&
        aliveNeighboursCount(currentGrid, i, j) < 2
      ) {
        nextGrid[i][j] = "▫";
      }
    }
  }
  return nextGrid;
}

module.exports = nextGeneration;
