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

const myArray2 = [5, 2, 3, 4, 1];
console.log(isSortedAscending(myArray2)); // Output: false
