function binarySearchRecursive(arr, target, start=0, end=arr.length-1) {
    if (start > end) {
        return -1; // target not found
    }

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        return mid; // target found
    } else if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, end); // search in the right half
    } else {
        return binarySearchRecursive(arr, target, start, mid - 1); // search in the left half
    }
}

// Example usage
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 7;
const index = binarySearchRecursive(arr, target);

if (index !== -1) {
    console.log(`Target ${target} found at index ${index}`);
} else {
    console.log(`Target ${target} not found`);
}
