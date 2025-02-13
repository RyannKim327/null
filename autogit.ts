function binarySearch(arr: number[], target: number, left: number, right: number): number {
    // Base case: if the left index exceeds the right, the target isn't found
    if (left > right) {
        return -1; // Target not found
    }

    // Calculate the middle index
    const mid = Math.floor((left + right) / 2);

    // Check if the middle element is the target
    if (arr[mid] === target) {
        return mid; // Target found, return the index
    }

    // If the target is less than the middle element, search the left half
    if (target < arr[mid]) {
        return binarySearch(arr, target, left, mid - 1);
    } else { // If the target is greater, search the right half
        return binarySearch(arr, target, mid + 1, right);
    }
}

// Helper function to initiate the binary search
function search(arr: number[], target: number): number {
    return binarySearch(arr, target, 0, arr.length - 1);
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const targetValue = 5;

const result = search(sortedArray, targetValue);
console.log(result); // Output: 4 (the index of the target in the array)
