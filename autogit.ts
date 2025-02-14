function isArraySortedAscending(arr: number[]): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false; // Found an element greater than the next one
        }
    }
    return true; // No elements were out of order
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 3, 2, 4, 5];

console.log(isArraySortedAscending(arr1)); // true
console.log(isArraySortedAscending(arr2)); // false
