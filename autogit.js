function binarySearchRecursive(arr, target, low, high) {
    if (low > high) {
        return -1; // Target not found
    }

    // Calculate mid index
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
        return mid; // Target found at mid index
    } else if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, high); // Search in the right half
    } else {
        return binarySearchRecursive(arr, target, low, mid - 1); // Search in the left half
    }
}

// Example usage
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17]; // Sorted array
const target = 9;
const index = binarySearchRecursive(arr, target, 0, arr.length - 1);

if (index !== -1) {
    console.log(`Target ${target} found at index ${index}`);
} else {
    console.log(`Target ${target} not found in the array`);
}
