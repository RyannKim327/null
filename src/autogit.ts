const originalArray: number[] = [1, 2, 3, 4, 5];
const reversedArray: number[] = originalArray.reverse();

console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
console.log(originalArray);  // Output: [5, 4, 3, 2, 1] (original array is also modified)
const originalArray: number[] = [1, 2, 3, 4, 5];
const reversedArray: number[] = [...originalArray].reverse();

console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
console.log(originalArray);  // Output: [1, 2, 3, 4, 5] (original array remains unchanged)
const originalArray: number[] = [1, 2, 3, 4, 5];
const reversedArray: number[] = [];

for (let i = originalArray.length - 1; i >= 0; i--) {
    reversedArray.push(originalArray[i]);
}

console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
const originalArray: number[] = [1, 2, 3, 4, 5];

const reversedArray: number[] = originalArray.reduce((acc, curr) => [curr, ...acc], []);

console.log(reversedArray); // Output: [5, 4, 3, 2, 1]
