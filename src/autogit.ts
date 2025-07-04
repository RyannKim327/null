function binarySearch<T>(arr: T[], target: T): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // Check if the target is at mid
        if (arr[mid] === target) {
            return mid; // Target found, return index
        }

        // If target is less than mid, adjust the right pointer
        if (arr[mid] > target) {
            right = mid - 1;
        } else {
            // If target is greater than mid, adjust the left pointer
            left = mid + 1;
        }
    }

    // Target not found
    return -1; // Indicate that the target is not in the array
}

// Example Usage
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 6;
const index = binarySearch(sortedArray, target);

if (index !== -1) {
    console.log(`Target found at index: ${index}`);
} else {
    console.log('Target not found');
}
