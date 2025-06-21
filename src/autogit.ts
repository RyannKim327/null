const numbers: number[] = [10, 5, 8, 20, 3];

// Use Math.max with the spread operator
const maxValue: number = Math.max(...numbers);

console.log(`The maximum value is: ${maxValue}`); // Output: The maximum value is: 20
const numbers: number[] = [10, 5, 8, 20, 3];

// Use reduce to find the maximum value
const maxValue: number = numbers.reduce((max, current) => {
  return current > max ? current : max;
}, numbers[0]); // Initialize with the first element

console.log(`The maximum value is: ${maxValue}`); // Output: The maximum value is: 20
const numbers: number[] = [];

const maxValue: number | undefined = numbers.reduce<number | undefined>((max, current) => {
  return current > (max ?? -Infinity) ? current : max;
}, undefined);

if (maxValue !== undefined) {
  console.log(`The maximum value is: ${maxValue}`);
} else {
  console.log('The array is empty.');
}
const numbers: number[] = [10, 5, 8, 20, 3];
let maxValue: number = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maxValue) {
    maxValue = numbers[i];
  }
}

console.log(`The maximum value is: ${maxValue}`); // Output: The maximum value is: 20
const numbers: number[] = [];
let maxValue: number | undefined;

if (numbers.length === 0) {
  maxValue = undefined;
} else {
  maxValue = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxValue) {
      maxValue = numbers[i];
    }
  }
}

if (maxValue !== undefined) {
  console.log(`The maximum value is: ${maxValue}`);
} else {
  console.log('The array is empty.');
}
const numbers: number[] = [10, 5, 8, 20, 3];

// Sort the array in ascending order
numbers.sort((a, b) => a - b);

// The last element is the maximum
const maxValue: number = numbers[numbers.length - 1];

console.log(`The maximum value is: ${maxValue}`); // Output: The maximum value is: 20
function findMaxValue(arr: (number | string)[]): number | undefined {
  // Filter out non-number and NaN values
  const numbers = arr
    .filter((item): item is number => typeof item === 'number' && !isNaN(item));

  if (numbers.length === 0) {
    return undefined; // Return undefined if no valid numbers are found
  }

  // Find the maximum value using reduce
  return numbers.reduce((max, current) => (current > max ? current : max), numbers[0]);
}

// Usage
const mixedArray: (number | string)[] = [10, '5', NaN, 20, 'three', 3];
const maxValue = findMaxValue(mixedArray);

if (maxValue !== undefined) {
  console.log(`The maximum value is: ${maxValue}`); // Output: The maximum value is: 20
} else {
  console.log('No valid numbers found in the array.');
}
