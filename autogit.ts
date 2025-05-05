function isArraySortedInAscendingOrder(arr: number[]): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false; // Found an element that is greater than the next one
        }
    }
    return true; // All elements are in order
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 1, 5, 4];

console.log(isArraySortedInAscendingOrder(arr1)); // true
console.log(isArraySortedInAscendingOrder(arr2)); // false
