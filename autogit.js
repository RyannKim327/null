function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

// Example
const myArray = [1, 2, 3, 4, 5];
console.log(isSorted(myArray)); // Output: true

const unsortedArray = [5, 4, 3, 2, 1];
console.log(isSorted(unsortedArray)); // Output: false
