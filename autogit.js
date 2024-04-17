function isArraySortedAscending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

// Example usage
const myArray = [1, 2, 3, 4, 5];
console.log(isArraySortedAscending(myArray)); // Output: true

const anotherArray = [5, 4, 3, 2, 1];
console.log(isArraySortedAscending(anotherArray)); // Output: false
