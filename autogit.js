function binarySearchRecursive(arr, target, start, end) {
    if (start > end) {
        return -1; // target value is not found in the array
    }

    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        return mid; // target value found at the middle index
    } else if (arr[mid] > target) {
        return binarySearchRecursive(arr, target, start, mid - 1); // search in the left half
    } else {
        return binarySearchRecursive(arr, target, mid + 1, end); // search in the right half
    }
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 6;
const result = binarySearchRecursive(arr, target, 0, arr.length - 1);
console.log('Target value found at index', result);
