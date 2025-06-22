function binarySearchRecursive<T>(arr: T[], target: T, low: number = 0, high: number = arr.length - 1): number {
    // Base case: if the search space is invalid, return -1 (not found)
    if (low > high) {
        return -1;
    }

    // Calculate the middle index
    const mid = Math.floor((low + high) / 2);

    // Compare the middle element with the target
    if (arr[mid] === target) {
        return mid; // Target found at index mid
    } else if (arr[mid] < target) {
        // Search in the right half
        return binarySearchRecursive(arr, target, mid + 1, high);
    } else {
        // Search in the left half
        return binarySearchRecursive(arr, target, low, mid - 1);
    }
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11, 13];
const targetValue = 7;

const resultIndex = binarySearchRecursive(sortedArray, targetValue);

if (resultIndex !== -1) {
    console.log(`Element found at index: ${resultIndex}`);
} else {
    console.log("Element not found in the array.");
}
function binarySearchRecursive<T>(arr: T[], target: T, low: number = 0, high: number = arr.length - 1): number {
    if (low > high) return -1;
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) return binarySearchRecursive(arr, target, mid + 1, high);
    return binarySearchRecursive(arr, target, low, mid - 1);
}
