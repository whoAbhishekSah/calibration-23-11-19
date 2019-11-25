function isFirstColumnDead(grid) {
  if (grid.length === 0) return true;
  for (let i = 0; i < grid.length; i += 1) {
    if (grid[i][0] === "▦") return false;
  }
  return true;
}

function removeDeadBoundryFromLeft(grid) {
  while (isFirstColumnDead(grid)) {
    for (let i = 0; i < grid.length; i += 1) {
      grid[i].shift();
    }
    if (grid.length === 0 || grid[0].length === 0) return [];
  }
  return grid;
}

module.exports = removeDeadBoundryFromLeft;
