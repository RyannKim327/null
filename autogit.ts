function binarySearch(arr: number[], target: number, start: number, end: number): number {
    if (start > end) {
        return -1; // Target not found
    }

    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        return mid; // Target found
    } else if (arr[mid] > target) {
        return binarySearch(arr, target, start, mid - 1); // Search in the left half
    } else {
        return binarySearch(arr, target, mid + 1, end); // Search in the right half
    }
}

// Usage
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;
const result = binarySearch(sortedArray, target, 0, sortedArray.length - 1);

if (result !== -1) {
    console.log(`Target found at index: ${result}`);
} else {
    console.log("Target not found in the array.");
}
