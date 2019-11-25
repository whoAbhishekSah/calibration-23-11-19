function isLastRowDead(grid) {
  if (grid.length === 0) return true;
  for (let j = 0; j < grid[grid.length - 1].length; j += 1) {
    if (grid[grid.length - 1][j] === "▦") return false;
  }
  return true;
}

function removeDeadBoundryFromBottom(grid) {
  while (isLastRowDead(grid)) {
    grid.pop();
    if (grid.length === 0) return [];
  }
  return grid;
}

module.exports = removeDeadBoundryFromBottom;
