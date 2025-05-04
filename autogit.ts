function binarySearch(arr: number[], target: number, left: number = 0, right?: number): number {
    if (right === undefined) {
        right = arr.length - 1; // Set right boundary on the first call
    }
    
    // Base case: if left index exceeds right, the target is not found
    if (left > right) {
        return -1; // Target not found
    }

    const mid = Math.floor((left + right) / 2);

    // Check if the target is present at mid
    if (arr[mid] === target) {
        return mid; // Target found!
    }

    // If the target is less than the mid element, search in the left half
    if (target < arr[mid]) {
        return binarySearch(arr, target, left, mid - 1);
    }

    // Otherwise, search in the right half
    return binarySearch(arr, target, mid + 1, right);
}

// Example usage
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;
const index = binarySearch(arr, target);

if (index !== -1) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log('Element not found');
}
