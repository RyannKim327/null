function isArraySortedAscending(arr: number[]): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;  // Not sorted in ascending order
        }
    }
    return true;  // Sorted in ascending order
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 3, 2, 4, 5];

console.log(isArraySortedAscending(arr1)); // Output: true
console.log(isArraySortedAscending(arr2)); // Output: false
function isArraySortedAscending(arr: number[]): boolean {
    return arr.every((val, index) => index === 0 || val >= arr[index - 1]);
}

// Example usage:
console.log(isArraySortedAscending(arr1)); // Output: true
console.log(isArraySortedAscending(arr2)); // Output: false
