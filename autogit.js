function binarySearchRecursive(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) {
        return -1; // target not found
    }

    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        return mid; // target found
    } else if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, end); // search right half
    } else {
        return binarySearchRecursive(arr, target, start, mid - 1); // search left half
    }
}

// Example usage
const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 11;
const index = binarySearchRecursive(arr, target);

if (index !== -1) {
    console.log(`Target ${target} found at index ${index}`);
} else {
    console.log(`Target ${target} not found`);
}
