function binarySearch(arr: number[], target: number, start: number, end: number): number {
    // Base case: if the start index exceeds the end index, the target is not found
    if (start > end) {
        return -1;
    }

    // Calculate the middle index
    const mid = Math.floor((start + end) / 2);

    // Check if the middle element is the target
    if (arr[mid] === target) {
        return mid; // Target found
    } else if (arr[mid] > target) {
        // Search in the left half
        return binarySearch(arr, target, start, mid - 1);
    } else {
        // Search in the right half
        return binarySearch(arr, target, mid + 1, end);
    }
}

// Helper function to initiate the binary search
function search(arr: number[], target: number): number {
    return binarySearch(arr, target, 0, arr.length - 1);
}

// Example usage
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;
const result = search(sortedArray, target);

if (result !== -1) {
    console.log(`Target found at index: ${result}`);
} else {
    console.log('Target not found');
}
