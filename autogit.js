function isSortedAscending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

// Test the function with an example array
const myArray = [1, 2, 3, 4, 5];
const isSorted = isSortedAscending(myArray);
console.log(isSorted); // Output: true
