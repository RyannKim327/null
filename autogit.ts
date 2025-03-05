function isArraySortedAscending(arr: number[]): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false; // If the current element is greater than the next, the array is not sorted
        }
    }
    return true; // If no elements were found out of order, the array is sorted
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 3, 2, 1];

console.log(isArraySortedAscending(arr1)); // Output: true
console.log(isArraySortedAscending(arr2)); // Output: false
