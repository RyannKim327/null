function isSortedAscending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

// Example usage
const unsortedArray = [3, 1, 5, 7, 2];
const sortedArray = [1, 2, 3, 5, 7];

console.log(isSortedAscending(unsortedArray)); // Output: false
console.log(isSortedAscending(sortedArray)); // Output: true
