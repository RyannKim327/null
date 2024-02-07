function binarySearchRecursive(array, target, low, high) {
    if (low > high) {
        return -1;
    }

    const mid = Math.floor((low + high) / 2);

    if (array[mid] === target) {
        return mid;
    }

    if (array[mid] > target) {
        return binarySearchRecursive(array, target, low, mid - 1);
    }

    if (array[mid] < target) {
        return binarySearchRecursive(array, target, mid + 1, high);
    }
}

// Example usage
const sortedArray = [1, 2, 3, 4, 5];
const targetValue = 4;

const index = binarySearchRecursive(sortedArray, targetValue, 0, sortedArray.length - 1);
console.log(index); // Output: 3
