function binarySearch(arr: number[], target: number, start: number, end: number): number {
    // Base case: if start index is greater than end index, the target is not found.
    if (start > end) {
        return -1;
    }

    // Calculate the midpoint index.
    const mid = Math.floor((start + end) / 2);

    // Check if the target is present at mid.
    if (arr[mid] === target) {
        return mid; // Target found, return the index.
    }

    // If the target is less than the mid value, search the left half.
    if (target < arr[mid]) {
        return binarySearch(arr, target, start, mid - 1);
    }

    // If the target is greater than the mid value, search the right half.
    return binarySearch(arr, target, mid + 1, end);
}

// Helper function to call binarySearch with appropriate start and end parameters.
function search(arr: number[], target: number): number {
    return binarySearch(arr, target, 0, arr.length - 1);
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetValue = 5;
const result = search(sortedArray, targetValue);

console.log(`Target found at index: ${result}`); // Output: Target found at index: 4
