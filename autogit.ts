function binarySearch(arr: number[], target: number, low: number = 0, high: number = arr.length - 1): number {
    // Base case: if the low index exceeds the high index, the target is not found
    if (low > high) {
        return -1; // Not found
    }

    // Calculate the middle index
    const mid = Math.floor((low + high) / 2);

    // Check if the middle element is the target
    if (arr[mid] === target) {
        return mid; // Target found
    }

    // If the target is smaller than the middle element, search the left half
    if (arr[mid] > target) {
        return binarySearch(arr, target, low, mid - 1);
    }

    // If the target is larger than the middle element, search the right half
    return binarySearch(arr, target, mid + 1, high);
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11];
const target = 7;
const index = binarySearch(sortedArray, target);
console.log(index); // Output: 3
