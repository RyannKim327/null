function binarySearch(arr: number[], target: number, left: number, right: number): number {
    // Base condition: if left index exceeds right, the target is not found
    if (left > right) {
        return -1; // Target not found
    }

    // Calculate the middle index
    const middle = Math.floor((left + right) / 2);
    
    // Check if the target is present at middle
    if (arr[middle] === target) {
        return middle; // Target found
    }
    
    // If target is smaller than middle element, search the left half
    if (target < arr[middle]) {
        return binarySearch(arr, target, left, middle - 1);
    }
    
    // If target is larger than middle element, search the right half
    return binarySearch(arr, target, middle + 1, right);
}

// Helper function to call binarySearch with initial indices
function search(arr: number[], target: number): number {
    return binarySearch(arr, target, 0, arr.length - 1);
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;
const result = search(arr, target);

console.log(result); // Output: 4 (index of the target)
