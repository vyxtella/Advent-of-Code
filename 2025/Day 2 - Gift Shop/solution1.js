import fs from 'fs';
const input = fs.readFileSync('2025/Day 2 - Gift Shop/input', 'utf-8').split(',');

let sum = 0;
input.forEach(set => {
  // get range of numbers and put em in an array
  const start = set.split('-')[0];
  const end = set.split('-')[1];
  const range = [];
  for (
    let i = 0;
    i <= Number(end) - Number(start);
    i++
  ) {
    range.push((Number(start) + i).toString());
  }

  range.forEach(num => {
    if (num.match(/(\b(\d+)\2\b)/g)) sum += Number(num);
  });
});

console.log(sum);

debugger;
