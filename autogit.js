function binarySearchRecursive(arr, target, start = 0, end = arr.length - 1) {
    // Base case: If start index is greater than end index, target is not in the array
    if (start > end) {
        return -1;
    }

    // Calculate the middle index
    const mid = Math.floor((start + end) / 2);

    // If the middle element is the target, return its index
    if (arr[mid] === target) {
        return mid;
    // If the middle element is greater than the target, search the left half of the array
    } else if (arr[mid] > target) {
        return binarySearchRecursive(arr, target, start, mid - 1);
    // If the middle element is less than the target, search the right half of the array
    } else {
        return binarySearchRecursive(arr, target, mid + 1, end);
    }
}

// Usage
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const target = 9;
const result = binarySearchRecursive(arr, target);
console.log(result); // Output: 4
