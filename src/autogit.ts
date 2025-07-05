function binarySearch(arr: number[], target: number, left: number, right: number): number {
    // Base case: if the left index exceeds the right index, target not found
    if (left > right) {
        return -1; // Indicating the target is not found
    }

    // Calculate the mid index
    const mid = Math.floor((left + right) / 2);

    // Check if the middle element is the target
    if (arr[mid] === target) {
        return mid; // Target found, return the index
    }

    // If the target is less than the middle element, search in the left half
    if (target < arr[mid]) {
        return binarySearch(arr, target, left, mid - 1);
    }
    
    // If the target is greater than the middle element, search in the right half
    return binarySearch(arr, target, mid + 1, right);
}

// Helper function to initiate the binary search
function search(arr: number[], target: number): number {
    return binarySearch(arr, target, 0, arr.length - 1);
}

// Example usage
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 7;
const result = search(sortedArray, target);

if (result !== -1) {
    console.log(`Element found at index: ${result}`);
} else {
    console.log('Element not found in the array.');
}
