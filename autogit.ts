const arr: number[] = [12, 34, 5, 76, 23, 11];

arr.sort((a, b) => b - a); // sort in descending order
const secondLargest = arr[1];

console.log(secondLargest); // output: 34
const arr: number[] = [12, 34, 5, 76, 23, 11];
let max = -Infinity;
let secondMax = -Infinity;

for (const num of arr) {
  if (num > max) {
    secondMax = max;
    max = num;
  } else if (num > secondMax && num !== max) {
    secondMax = num;
  }
}

console.log(secondMax); // output: 34
const arr: number[] = [12, 34, 5, 76, 23, 11];
const max = Math.max(...arr);
const secondLargest = Math.max(...arr.filter(x => x !== max));

console.log(secondLargest); // output: 34
