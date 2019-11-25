function isLastColumnDead(grid) {
  if (grid.length === 0) return true;
  for (let i = 0; i < grid.length; i += 1) {
    if (grid[i][grid[0].length - 1] === "▦") return false;
  }
  return true;
}

function removeDeadBoundryFromRight(grid) {
  while (isLastColumnDead(grid)) {
    for (let i = 0; i < grid.length; i += 1) {
      grid[i].pop();
    }
    if (grid.length === 0 || grid[0].length === 0) return [];
  }
  return grid;
}

module.exports = removeDeadBoundryFromRight;
