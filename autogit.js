function binarySearchRecursive(arr, target, start = 0, end = arr.length - 1) {
    // Base case: if start index becomes greater than end index, return -1
    if (start > end) {
        return -1;
    }
    
    // Calculate mid index
    const mid = Math.floor((start + end) / 2);

    // If the middle element is the target, return its index
    if (arr[mid] === target) {
        return mid;
    } 
    // If the target is less than the middle element, search the left half
    else if (target < arr[mid]) {
        return binarySearchRecursive(arr, target, start, mid - 1);
    } 
    // If the target is greater than the middle element, search the right half
    else {
        return binarySearchRecursive(arr, target, mid + 1, end);
    }
}

// Test the binary search algorithm
const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 11;
const index = binarySearchRecursive(arr, target);

if (index !== -1) {
    console.log(`Target ${target} found at index ${index}.`);
} else {
    console.log(`Target ${target} not found in the array.`);
}
