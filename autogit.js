function binarySearchRecursive(array, target, start, end) {
    if (start > end) {
        return -1;
    }

    const middle = Math.floor((start + end) / 2);

    if (array[middle] === target) {
        return middle;
    } else if (array[middle] < target) {
        return binarySearchRecursive(array, target, middle + 1, end);
    } else {
        return binarySearchRecursive(array, target, start, middle - 1);
    }
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 7;
const index = binarySearchRecursive(sortedArray, target, 0, sortedArray.length - 1);

if (index !== -1) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log("Element not found");
}
