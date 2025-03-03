function binarySearch(arr: number[], target: number, left: number = 0, right: number = arr.length - 1): number {
    // Base case: if the left index exceeds the right index
    if (left > right) {
        return -1; // target not found
    }

    // Calculate the middle index
    const mid: number = Math.floor((left + right) / 2);

    // Check if the middle element is the target
    if (arr[mid] === target) {
        return mid; // target found
    } 
    // If the target is less than the middle element, search in the left half
    else if (arr[mid] > target) {
        return binarySearch(arr, target, left, mid - 1);
    } 
    // If the target is greater than the middle element, search in the right half
    else {
        return binarySearch(arr, target, mid + 1, right);
    }
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 6;
const result = binarySearch(sortedArray, target);

console.log(result); // Should output the index of the target if found, -1 otherwise.
