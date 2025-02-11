function binarySearch(arr: number[], target: number, start: number, end: number): number {
    if (start > end) {
        return -1; // Target not found
    }

    const mid = Math.floor((start + end) / 2); // Calculate middle index

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

// Example usage
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 7;
const index = binarySearch(nums, target, 0, nums.length - 1);
console.log(index); // Output: 6 (index of the target)
