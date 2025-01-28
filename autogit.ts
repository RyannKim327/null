let numbers: number[] = [1, 2, 3, 4, 5];

let mean = numbers.reduce((acc, current) => acc + current, 0) / numbers.length;

console.log(mean); // Output: 3
let numbers: number[] = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

let mean = sum / numbers.length;

console.log(mean); // Output: 3
let numbers: number[] = [];

if (numbers.length > 0) {
  let mean = numbers.reduce((acc, current) => acc + current, 0) / numbers.length;
  console.log(mean);
} else {
  console.log("Cannot calculate mean of an empty list");
}
