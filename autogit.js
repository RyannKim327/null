function binarySearchRecursive(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) {
        return -1;
    }

    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, end);
    } else {
        return binarySearchRecursive(arr, target, start, mid - 1);
    }
}

// Example usage
const array = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 7;
const result = binarySearchRecursive(array, target);

if (result !== -1) {
    console.log("Element found at index: " + result);
} else {
    console.log("Element not found in the array.");
}
