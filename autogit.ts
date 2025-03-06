function binarySearch(arr: number[], target: number, left: number, right: number): number {
    // Base case: if left index exceeds right index, target is not found
    if (left > right) {
        return -1;
    }

    // Calculate the middle index
    const mid = Math.floor((left + right) / 2);

    // Check if the middle element is the target
    if (arr[mid] === target) {
        return mid; // Target found, return index
    }

    // If target is less than the middle element, search in the left sub-array
    if (target < arr[mid]) {
        return binarySearch(arr, target, left, mid - 1);
    } else {
        // If target is greater than the middle element, search in the right sub-array
        return binarySearch(arr, target, mid + 1, right);
    }
}

// Helper function to initiate the binary search
function findIndex(arr: number[], target: number): number {
    return binarySearch(arr, target, 0, arr.length - 1);
}

// Example usage
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetValue = 6;
const index = findIndex(sortedArray, targetValue);

console.log(index);  // Output: 5 (the index of the target value in the array)
