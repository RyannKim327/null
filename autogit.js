function binarySearchRecursive(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) {
        return -1; // Base case: not found
    }

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        return mid; // Base case: found
    } else if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, end); // Search the right half
    } else {
        return binarySearchRecursive(arr, target, start, mid - 1); // Search the left half
    }
}

// Example usage
let array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let target = 15;
let index = binarySearchRecursive(array, target);

if (index !== -1) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log('Element not found in the array');
}
