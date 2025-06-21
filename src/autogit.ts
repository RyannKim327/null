// Define an array of numbers
const numbers: number[] = [3, 7, 2, 9, 4];

// Use Math.max() with the spread operator to find the maximum value
const maxValue: number = Math.max(...numbers);

console.log(`The maximum value is: ${maxValue}`); // Output: The maximum value is: 9
// Define an array of numbers
const numbers: number[] = [3, 7, 2, 9, 4];

// Use reduce to find the maximum value
const maxValue: number = numbers.reduce((max, current) => (current > max ? current : max), numbers[0]);

console.log(`The maximum value is: ${maxValue}`); // Output: The maximum value is: 9
// Define an array of numbers
const numbers: number[] = [3, 7, 2, 9, 4];

// Sort the array in descending order and pick the first element
const sortedNumbers: number[] = [...numbers].sort((a, b) => b - a);
const maxValue: number = sortedNumbers[0];

console.log(`The maximum value is: ${maxValue}`); // Output: The maximum value is: 9
function findMax(arr: number[]): number | undefined {
    if (arr.length === 0) return undefined;
    return Math.max(...arr);
}

const emptyArray: number[] = [];
const maxValue = findMax(emptyArray);

if (maxValue !== undefined) {
    console.log(`The maximum value is: ${maxValue}`);
} else {
    console.log('The array is empty.');
}
The array is empty.
function findMaxSafe(arr: any[]): number | undefined {
    const numArr = arr.filter(item => typeof item === 'number');
    if (numArr.length === 0) return undefined;
    return Math.max(...numArr);
}

const mixedArray: any[] = [1, 'two', 3, null, 5];
const maxValue = findMaxSafe(mixedArray);

if (maxValue !== undefined) {
    console.log(`The maximum value is: ${maxValue}`); // Output: The maximum value is: 5
} else {
    console.log('No numeric values found in the array.');
}
function findMaximumValue(arr: number[]): number | undefined {
    if (arr.length === 0) {
        console.warn('The array is empty.');
        return undefined;
    }

    const maxValue = Math.max(...arr);
    return maxValue;
}

// Test cases
const testArray1: number[] = [10, 20, 30, 40, 50];
const testArray2: number[] = [-3, -7, -1, -10];
const testArray3: number[] = [];

const max1 = findMaximumValue(testArray1);
const max2 = findMaximumValue(testArray2);
const max3 = findMaximumValue(testArray3);

console.log(max1 !== undefined ? `Max value in testArray1: ${max1}` : 'testArray1 is empty.');
console.log(max2 !== undefined ? `Max value in testArray2: ${max2}` : 'testArray2 is empty.');
console.log(max3 !== undefined ? `Max value in testArray3: ${max3}` : 'testArray3 is empty.');
Max value in testArray1: 50
Max value in testArray2: -1
The array is empty.
testArray3 is empty.
