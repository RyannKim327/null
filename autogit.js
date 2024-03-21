function binarySearchRecursive(arr, target, start=0, end=arr.length - 1) {
    if (start > end) {
        return -1; // Element not found
    }

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        return mid; // Element found
    } else if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, end); // Search in the right half
    } else {
        return binarySearchRecursive(arr, target, start, mid - 1); // Search in the left half
    }
}

// Example usage
let arr = [1, 3, 5, 7, 9, 11, 13, 15];
let target = 7;

let index = binarySearchRecursive(arr, target);

if (index !== -1) {
    console.log(`Element found at index ${index}`);
} else {
    console.log(`Element not found`);
}
