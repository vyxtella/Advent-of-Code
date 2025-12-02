import fs from 'fs';
const input = fs.readFileSync('2025/Day 1 - Secret Entrance/input', 'utf-8').split('\n');

let current = 50;
let zeroCount = 0;

input.forEach(row => {
  // move right or left by given amount
  if (row.startsWith('R')) current += Number(row.substring(1));
  else current -= Number(row.substring(1));

  // keep current between 0 and 99
  while (current > 99) current -= 100;
  while (current < 0) current += 100;

  // check if 0 is current and add to count
  if (current === 0) zeroCount++;
});

console.log(zeroCount);

debugger;
