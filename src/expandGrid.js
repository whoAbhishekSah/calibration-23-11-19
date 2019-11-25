function expandGrid(grid) {
  const row = grid.length;
  const column = grid[0].length;
  const expandedGrid = [];
  for (let i = 0; i < row + 2; i += 1) {
    expandedGrid.push([]);
    for (let j = 0; j < column + 2; j += 1) {
      expandedGrid[i].push("▫");
    }
  }
  for (let i = 0; i < row; i += 1) {
    for (let j = 0; j < column; j += 1) {
      expandedGrid[i + 1][j + 1] = grid[i][j];
    }
  }
  return expandedGrid;
}

module.exports = expandGrid;
