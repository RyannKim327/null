function binarySearchRecursive(arr, target, start, end) {
    if (start > end) {
        return -1; // Base case: target not found
    }

    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        return mid; // Base case: target found
    } else if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, end); // Search in the right half
    } else {
        return binarySearchRecursive(arr, target, start, mid - 1); // Search in the left half
    }
}

// Example usage
const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 7;
const index = binarySearchRecursive(arr, target, 0, arr.length - 1);

if (index !== -1) {
    console.log(`Target ${target} found at index ${index}`);
} else {
    console.log(`Target ${target} not found in the array`);
}
