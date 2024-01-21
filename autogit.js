function binarySearchRecursive(array, target, low, high) {
    if (low > high) {
        return -1; // Base case: target not found
    }

    const mid = Math.floor((low + high) / 2);

    if (array[mid] === target) {
        return mid; // Base case: target found
    } else if (array[mid] > target) {
        return binarySearchRecursive(array, target, low, mid - 1); // Search left half
    } else {
        return binarySearchRecursive(array, target, mid + 1, high); // Search right half
    }
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11, 13];
const targetValue = 9;

const index = binarySearchRecursive(sortedArray, targetValue, 0, sortedArray.length - 1);
console.log(index); // Output: 4 (index where targetValue is found)
