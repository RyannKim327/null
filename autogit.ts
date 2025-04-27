function binarySearch(arr: number[], target: number, left: number, right: number): number {
    if (left > right) {
        return -1; // Target not found
    }

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid; // Target found
    } else if (arr[mid] > target) {
        // Target is in the left half
        return binarySearch(arr, target, left, mid - 1);
    } else {
        // Target is in the right half
        return binarySearch(arr, target, mid + 1, right);
    }
}

// Helper function to initiate the search
function search(arr: number[], target: number): number {
    return binarySearch(arr, target, 0, arr.length - 1);
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;

const index = search(sortedArray, target);
if (index !== -1) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log(`Element not found`);
}
