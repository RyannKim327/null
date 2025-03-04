function binarySearch(arr: number[], target: number, left: number, right: number): number {
    // Base condition: if the left index is greater than the right index, the target is not found
    if (left > right) {
        return -1; // Target not found
    }

    // Calculate the mid index
    const mid = Math.floor((left + right) / 2);

    // Check if the target element is present at mid
    if (arr[mid] === target) {
        return mid; // Target found, return the index
    }

    // If the target is smaller than the mid value, search in the left half
    if (arr[mid] > target) {
        return binarySearch(arr, target, left, mid - 1);
    }

    // If the target is larger than the mid value, search in the right half
    return binarySearch(arr, target, mid + 1, right);
}

// Helper function to call the recursive binary search
function search(arr: number[], target: number): number {
    return binarySearch(arr, target, 0, arr.length - 1);
}

// Example usage
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 7;
const result = search(arr, target);

if (result !== -1) {
    console.log(`Element found at index: ${result}`);
} else {
    console.log("Element not found in the array.");
}
