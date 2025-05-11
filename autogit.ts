function binarySearchRecursive(arr: number[], target: number, low = 0, high = arr.length - 1): number {
    if (low > high) {
        return -1;  // Base case: target not found
    }
    
    const mid = Math.floor((low + high) / 2);
    
    if (arr[mid] === target) {
        return mid;  // Found the target, return its index
    } else if (arr[mid] > target) {
        // Search left half
        return binarySearchRecursive(arr, target, low, mid - 1);
    } else {
        // Search right half
        return binarySearchRecursive(arr, target, mid + 1, high);
    }
}
const numbers = [1, 3, 5, 7, 9, 11];
const idx = binarySearchRecursive(numbers, 7);
console.log(idx);  // Output: 3
