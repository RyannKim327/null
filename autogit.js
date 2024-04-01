function binarySearchRecursive(target, arr, start, end) {
    if (start > end) {
        return -1;
    }

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] > target) {
        return binarySearchRecursive(target, arr, start, mid - 1);
    } else {
        return binarySearchRecursive(target, arr, mid + 1, end);
    }
}

// Example usage
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const target = 9;
const result = binarySearchRecursive(target, arr, 0, arr.length - 1);

if (result !== -1) {
    console.log(`Element found at index: ${result}`);
} else {
    console.log('Element not found in the array.');
}
