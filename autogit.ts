function binarySearch(arr: number[], target: number, left: number, right: number): number {
    // Base condition: if the left index exceeds the right index, the target is not found
    if (left > right) {
        return -1; // Target not found
    }

    // Calculate the middle index
    const mid = Math.floor((left + right) / 2);

    // Check if the target value is present at mid
    if (arr[mid] === target) {
        return mid; // Target found, return the index
    }
    
    // If target is smaller than mid, search in the left sub-array
    if (target < arr[mid]) {
        return binarySearch(arr, target, left, mid - 1);
    } 
    // If target is larger than mid, search in the right sub-array
    else {
        return binarySearch(arr, target, mid + 1, right);
    }
}

// Wrapper function to initiate the recursive search
function search(arr: number[], target: number): number {
    return binarySearch(arr, target, 0, arr.length - 1);
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const targetValue = 5;
const resultIndex = search(sortedArray, targetValue);

if (resultIndex !== -1) {
    console.log(`Target found at index: ${resultIndex}`);
} else {
    console.log(`Target not found`);
}
