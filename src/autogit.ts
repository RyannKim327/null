// Declare an array of integers
const numbers: number[] = [5, 3, 8, 1, 2, 7];

// Sort the array in ascending order
numbers.sort((a, b) => a - b);

console.log("Sorted array (ascending):", numbers);

// If you want to sort in descending order
numbers.sort((a, b) => b - a);

console.log("Sorted array (descending):", numbers);
function sortArray(arr: number[], ascending: boolean = true): number[] {
    return arr.sort((a, b) => ascending ? a - b : b - a);
}

// Example usage
const myArray: number[] = [45, 12, 78, 34, 23, 89, 11];

// Sort in ascending order
const sortedAscending = sortArray(myArray);
console.log("Sorted Ascending:", sortedAscending);

// Sort in descending order
const sortedDescending = sortArray(myArray, false);
console.log("Sorted Descending:", sortedDescending);
Sorted Ascending: [ 11, 12, 23, 34, 45, 78, 89 ]
Sorted Descending: [ 89, 78, 45, 34, 23, 12, 11 ]
