const readInputFile = require("./src/inputReader");
const nextGeneration = require("./src/nextGeneration");

function wait(time) {
  return new Promise(res => {
    setTimeout(res, time);
  });
}

async function main() {
  console.log("Game of Life");
  let grid = readInputFile("input.txt");
  grid.pop();
  console.log(grid);
  let iterationCount = 0;
  while (true) {
    await wait(100);
    console.clear();
    console.log(`\nIteration #${iterationCount}`);
    grid = nextGeneration(grid);
    if (grid.length === 0) return;
    for (let i = 0; i < grid.length; i += 1) {
      let row = "";
      for (let j = 0; j < grid[0].length; j += 1) {
        row += `${grid[i][j]} `;
      }
      console.log(row);
    }
    iterationCount += 1;
  }
}

main();
