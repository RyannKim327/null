function isSortedAscending(arr: number[]): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;  // Array is not sorted in ascending order
        }
    }
    return true;  // Array is sorted in ascending order
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 3, 4, 2, 1];
const arr3 = [1, 1, 2, 2, 3];

console.log(isSortedAscending(arr1)); // true
console.log(isSortedAscending(arr2)); // false
console.log(isSortedAscending(arr3)); // true
