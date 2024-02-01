const numbers = [3, 9, 2, 6, 5];

const max = Math.max(...numbers);

console.log(max); // Output: 9
const numbers = [];

if (numbers.length === 0) {
  console.log("Array is empty");
} else {
  const max = Math.max(...numbers);
  console.log(max);
}
