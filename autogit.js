function binarySearchRecursive(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) {
        return -1; // Not found
    }

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        return mid; // Found the target
    } else if (target < arr[mid]) {
        return binarySearchRecursive(arr, target, start, mid - 1); // Search in the left half
    } else {
        return binarySearchRecursive(arr, target, mid + 1, end); // Search in the right half
    }
}

// Example usage
const array = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 7;
const index = binarySearchRecursive(array, target);

if (index !== -1) {
    console.log(`Target ${target} found at index ${index}`);
} else {
    console.log(`Target ${target} not found in the array`);
}
