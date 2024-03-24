function binarySearchRecursive(arr, target, start = 0, end = arr.length - 1) {
    // Base case: if start index is greater than end index, target not found
    if (start > end) {
        return -1;
    }

    // Find the middle index
    let mid = Math.floor((start + end) / 2);

    // If target is found at the middle index, return the index
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        // If target is greater than the middle element, search the right subarray
        return binarySearchRecursive(arr, target, mid + 1, end);
    } else {
        // If target is less than the middle element, search the left subarray
        return binarySearchRecursive(arr, target, start, mid - 1);
    }
}

// Usage
let arr = [1, 3, 5, 7, 9, 11, 13, 15];
let target = 7;
let index = binarySearchRecursive(arr, target);
console.log('Element found at index: ' + index); // Output: Element found at index: 3
