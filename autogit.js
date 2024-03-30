function isSortedAscending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

// Example
const myArray = [1, 2, 3, 4, 5];
console.log(isSortedAscending(myArray)); // Output: true

const unsortedArray = [5, 3, 1, 4, 2];
console.log(isSortedAscending(unsortedArray)); // Output: false
