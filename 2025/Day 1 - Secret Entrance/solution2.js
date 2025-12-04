import fs from 'fs';
const input = fs.readFileSync('2025/Day 1 - Secret Entrance/input', 'utf-8').split('\n');

let current = 50;
let zeroCount = 0;

input.forEach(row => {
  let clicks = Number(row.substring(1));

  if (row.startsWith('R')) {
    while (clicks !== 0) {
      current++;
      if (current > 99) current -= 100;
      clicks--;
      if (current === 0) zeroCount++;
    }
  }
  else {
    while (clicks !== 0) {
      current--;
      if (current < 0) current += 100;
      clicks--;
      if (current === 0) zeroCount++;
    }
  }
});

console.log(zeroCount);

debugger;
