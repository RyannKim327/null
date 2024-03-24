function binarySearchRecursive(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) {
        return -1; // Base case: target not found
    }

    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        return mid; // Base case: target found
    } else if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, end); // Search right half
    } else {
        return binarySearchRecursive(arr, target, start, mid - 1); // Search left half
    }
}

// Example usage
const array = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const target = 9;
const index = binarySearchRecursive(array, target);

if (index !== -1) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log(`Element not found`);
}
