function isArraySortedAscending(arr: number[]): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false; // Found an element that is greater than the next one
        }
    }
    return true; // If no such element was found, the array is sorted
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 3, 2, 4, 5];

console.log(isArraySortedAscending(arr1)); // Output: true
console.log(isArraySortedAscending(arr2)); // Output: false
function isArraySortedAscending(arr: number[]): boolean {
    return arr.every((value, index) => index === arr.length - 1 || value <= arr[index + 1]);
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 3, 2, 4, 1];

console.log(isArraySortedAscending(arr1)); // Output: true
console.log(isArraySortedAscending(arr2)); // Output: false
function isArraySortedAscending(arr: number[]): boolean {
    return arr.reduce((isSorted, current, index) => {
        if (index === 0) return true; // The first element is always sorted
        return isSorted && current >= arr[index - 1]; // Check if current is greater than or equal to the previous
    }, true);
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 3, 2, 4, 5];

console.log(isArraySortedAscending(arr1)); // Output: true
console.log(isArraySortedAscending(arr2)); // Output: false
function isArraySortedAscending(arr: number[]): boolean {
    return JSON.stringify(arr) === JSON.stringify([...arr].sort((a, b) => a - b));
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 3, 2, 4, 5];

console.log(isArraySortedAscending(arr1)); // Output: true
console.log(isArraySortedAscending(arr2)); // Output: false
