function isArraySortedAscending(arr: number[]): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false; // Found an out of order pair
        }
    }
    return true; // Array is sorted
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 3, 2, 4, 5];

console.log(isArraySortedAscending(array1)); // Output: true
console.log(isArraySortedAscending(array2)); // Output: false
function isArraySortedAscending(arr: number[]): boolean {
    return arr.every((value, index) => index === 0 || arr[index - 1] <= value);
}

// Example usage:
console.log(isArraySortedAscending(array1)); // Output: true
console.log(isArraySortedAscending(array2)); // Output: false
