function isFirstRowDead(grid) {
  if (grid.length === 0) return true;
  for (let j = 0; j < grid[0].length; j += 1) {
    if (grid[0][j] === "▦") return false;
  }
  return true;
}

function removeDeadBoundryFromTop(grid) {
  while (isFirstRowDead(grid)) {
    grid.shift();
    if (grid.length === 0) return [];
  }
  return grid;
}

module.exports = removeDeadBoundryFromTop;
