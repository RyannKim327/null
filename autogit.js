function binarySearchRecursive(arr, target, start, end) {
    if (start > end) {
        return -1; // Element not found
    }

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        return mid; // Element found
    } else if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, end); // Search the right half
    } else {
        return binarySearchRecursive(arr, target, start, mid - 1); // Search the left half
    }
}

// Usage
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 5;
let index = binarySearchRecursive(arr, target, 0, arr.length - 1);

if (index !== -1) {
    console.log(`Element found at index ${index}`);
} else {
    console.log('Element not found');
}
