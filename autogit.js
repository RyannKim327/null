function binarySearchRecursive(arr, target, start = 0, end = arr.length - 1) {
    // Base case: if start index is greater than end index, element not found
    if (start > end) {
        return -1;
    }
    
    // Find the middle index
    const mid = Math.floor((start + end) / 2);
    
    // Check if the middle element is the target
    if (arr[mid] === target) {
        return mid;
    }
    
    // If the target is less than the middle element, search in the left half
    if (target < arr[mid]) {
        return binarySearchRecursive(arr, target, start, mid - 1);
    }
    
    // If the target is greater than the middle element, search in the right half
    return binarySearchRecursive(arr, target, mid + 1, end);
}

// Example usage
const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 7;
const index = binarySearchRecursive(arr, target);
console.log(`Element found at index: ${index}`);
