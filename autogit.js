const array = [1, 2, 3, 4, 5];
array.reverse();
console.log(array); // Output: [5, 4, 3, 2, 1]
const array = [1, 2, 3, 4, 5];

for (let i = 0; i < Math.floor(array.length / 2); i++) {
  const temp = array[i];
  array[i] = array[array.length - 1 - i];
  array[array.length - 1 - i] = temp;
}

console.log(array); // Output: [5, 4, 3, 2, 1]
const array = [1, 2, 3, 4, 5];
const reversedArray = [...array].reverse();
console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
