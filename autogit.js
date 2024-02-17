function binarySearchRecursive(array, target, start, end) {
    if (start > end) {
        return -1;
    }

    let mid = Math.floor((start + end) / 2);

    if (array[mid] === target) {
        return mid;
    } else if (array[mid] < target) {
        return binarySearchRecursive(array, target, mid + 1, end);
    } else {
        return binarySearchRecursive(array, target, start, mid - 1);
    }
}

// Example usage
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const target = 13;
const index = binarySearchRecursive(arr, target, 0, arr.length - 1);

if (index !== -1) {
    console.log(`Target ${target} found at index ${index}`);
} else {
    console.log(`Target ${target} not found in the array`);
}
