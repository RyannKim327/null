function binarySearchRecursive(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) {
        return -1; // target not found
    }

    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
        return mid; // target found
    } else if (target < arr[mid]) {
        return binarySearchRecursive(arr, target, low, mid - 1);
    } else {
        return binarySearchRecursive(arr, target, mid + 1, high);
    }
}

// Example usage
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const target = 9;
const index = binarySearchRecursive(arr, target);

if (index !== -1) {
    console.log(`Target ${target} found at index ${index}.`);
} else {
    console.log(`Target ${target} not found in the array.`);
}
