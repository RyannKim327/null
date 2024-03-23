function isArraySorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

// Test the function
const arr1 = [1, 2, 3, 4, 5];
console.log(isArraySorted(arr1)); // Output: true

const arr2 = [5, 4, 3, 2, 1];
console.log(isArraySorted(arr2)); // Output: false
