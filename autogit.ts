function isArraySorted(arr: number[]): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false; // Not sorted
        }
    }
    return true; // All elements are in ascending order
}

// Example usage
const array1 = [1, 2, 3, 4, 5];
const array2 = [5, 3, 4, 2, 1];

console.log(isArraySorted(array1)); // true
console.log(isArraySorted(array2)); // false
