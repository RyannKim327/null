function binarySearchRecursive(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) {
        return -1;
    }

    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] > target) {
        return binarySearchRecursive(arr, target, start, mid - 1);
    } else {
        return binarySearchRecursive(arr, target, mid + 1, end);
    }
}

// Example usage:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetValue = 8;

console.log(binarySearchRecursive(array, targetValue));  // Output: 7
