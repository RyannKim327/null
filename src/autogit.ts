function binarySearch(arr: number[], target: number, start: number, end: number): number {
    // Base case: If the interval is invalid, return -1
    if (start > end) {
        return -1; 
    }

    // Calculate the mid index
    const mid = Math.floor((start + end) / 2);

    // Check if the mid element is the target
    if (arr[mid] === target) {
        return mid; // Target found
    } 
    
    // If target is less than mid's element, search in the left half
    if (target < arr[mid]) {
        return binarySearch(arr, target, start, mid - 1);
    } 
    
    // If target is greater than mid's element, search in the right half
    return binarySearch(arr, target, mid + 1, end);
}

// Helper function to call the recursive binary search
function recursiveBinarySearch(arr: number[], target: number): number {
    return binarySearch(arr, target, 0, arr.length - 1);
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetValue = 7;
const resultIndex = recursiveBinarySearch(sortedArray, targetValue);

console.log(resultIndex);  // Output: 6 (the index of the target value)
