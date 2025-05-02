function binarySearchRecursive(arr: number[], target: number, left = 0, right = arr.length - 1): number {
    if (left > right) {
        return -1; // Target not found
    }
    
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid; // Found the target, return the index
    } else if (arr[mid] > target) {
        // Search in the left half
        return binarySearchRecursive(arr, target, left, mid - 1);
    } else {
        // Search in the right half
        return binarySearchRecursive(arr, target, mid + 1, right);
    }
}
