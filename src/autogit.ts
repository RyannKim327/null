const numbers: number[] = [10, 5, 8, 20, 3];

// Use the spread operator to pass array elements as individual arguments to Math.max()
const maxValue: number = Math.max(...numbers);

console.log(`The maximum value is: ${maxValue}`); // Output: The maximum value is: 20
const numbers: number[] = [10, 5, 8, 20, 3];

// Use reduce to iterate through the array and find the maximum value
const maxValue: number = numbers.reduce((max, current) => {
    return current > max ? current : max;
}, numbers[0]); // Initialize 'max' with the first element of the array

console.log(`The maximum value is: ${maxValue}`); // Output: The maximum value is: 20
const numbers: number[] = [10, 5, 8, 20, 3];

if (numbers.length === 0) {
    throw new Error("Cannot find the maximum value of an empty array.");
}

let maxValue: number = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxValue) {
        maxValue = numbers[i];
    }
}

console.log(`The maximum value is: ${maxValue}`); // Output: The maximum value is: 20
function findMax(arr: number[]): number | undefined {
    if (arr.length === 0) {
        console.warn("The array is empty. No maximum value exists.");
        return undefined;
    }

    return arr.reduce((max, current) => (current > max ? current : max), arr[0]);
}

const numbers: number[] = [];
const maxValue = findMax(numbers);

if (maxValue !== undefined) {
    console.log(`The maximum value is: ${maxValue}`);
} else {
    console.log("Could not determine the maximum value.");
}
function findMaxUsingMathMax(arr: number[]): number | undefined {
    if (arr.length === 0) return undefined;
    return Math.max(...arr);
}

function findMaxUsingReduce(arr: number[]): number | undefined {
    if (arr.length === 0) return undefined;
    return arr.reduce((max, current) => (current > max ? current : max), arr[0]);
}

function findMaxUsingLoop(arr: number[]): number | undefined {
    if (arr.length === 0) return undefined;

    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

const numbers: number[] = [10, 5, 8, 20, 3];

console.log("Using Math.max:", findMaxUsingMathMax(numbers)); // 20
console.log("Using reduce:", findMaxUsingReduce(numbers));     // 20
console.log("Using loop:", findMaxUsingLoop(numbers));         // 20

const emptyArray: number[] = [];
console.log("Empty array with Math.max:", findMaxUsingMathMax(emptyArray)); // undefined
console.log("Empty array with reduce:", findMaxUsingReduce(emptyArray));     // undefined
console.log("Empty array with loop:", findMaxUsingLoop(emptyArray));         // undefined
Using Math.max: 20
Using reduce: 20
Using loop: 20
Empty array with Math.max: undefined
Empty array with reduce: undefined
Empty array with loop: undefined
