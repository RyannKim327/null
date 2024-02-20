function isSortedAscending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

// Example usage:
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 7, 2, 9, 10];

console.log(isSortedAscending(array1)); // Output: true
console.log(isSortedAscending(array2)); // Output: false
