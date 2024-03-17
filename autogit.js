function isArraySortedAscending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

// Test the function
const sortedArray = [1, 2, 3, 4, 5];
const unsortedArray = [1, 3, 2, 4, 5];

console.log(isArraySortedAscending(sortedArray)); // Output: true
console.log(isArraySortedAscending(unsortedArray)); // Output: false
