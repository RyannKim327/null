function binarySearchRecursive(target, arr, start, end) {
    // Base case: if the start index is greater than the end index, the target element is not found
    if (start > end) {
        return -1;
    }
    
    // Find the middle index
    const mid = Math.floor((start + end) / 2);

    // Base case: if the target element is found at the middle index, return the index
    if (arr[mid] === target) {
        return mid;
    }

    // Recursively search in the left half if the target is smaller than the middle element
    if (arr[mid] > target) {
        return binarySearchRecursive(target, arr, start, mid - 1);
    }
    
    // Recursively search in the right half if the target is larger than the middle element
    return binarySearchRecursive(target, arr, mid + 1, end);
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 6;
const startIndex = 0;
const endIndex = array.length - 1;

const result = binarySearchRecursive(target, array, startIndex, endIndex);
console.log(result); // Output: 5 (index of the target element)
