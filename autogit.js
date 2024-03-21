function binarySearchRecursive(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) {
        return -1; // Element not found
    }
    
    const mid = Math.floor((low + high) / 2);
    
    if (arr[mid] === target) {
        return mid; // Element found
    } else if (arr[mid] > target) {
        return binarySearchRecursive(arr, target, low, mid - 1); // Search left half
    } else {
        return binarySearchRecursive(arr, target, mid + 1, high); // Search right half
    }
}

// Example usage
const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 7;
const resultIndex = binarySearchRecursive(arr, target);

if (resultIndex !== -1) {
    console.log(`Element found at index: ${resultIndex}`);
} else {
    console.log("Element not found in the array.");
}
