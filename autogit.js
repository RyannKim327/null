function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) {
        return -1; // If the target is not found
    }

    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        return mid; // If the target is found
    } else if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, end); // Search the right half
    } else {
        return binarySearch(arr, target, start, mid - 1); // Search the left half
    }
}

// Example usage
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const target = 7;
const index = binarySearch(sortedArray, target);

if (index !== -1) {
    console.log(`Target ${target} found at index ${index}`);
} else {
    console.log(`Target ${target} not found in the array`);
}
