function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) {
        return -1; // Element not found
    }
    
    let mid = Math.floor((start + end) / 2);
    
    if (arr[mid] === target) {
        return mid; // Element found
    } else if (arr[mid] > target) {
        return binarySearch(arr, target, start, mid - 1); // Search left half
    } else {
        return binarySearch(arr, target, mid + 1, end); // Search right half
    }
}

// Example usage
const arr = [1, 3, 5, 7, 9, 11, 13];
const target = 7;
const index = binarySearch(arr, target);

if (index !== -1) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log("Element not found");
}
