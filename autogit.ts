function binarySearch(arr: number[], target: number, left: number = 0, right: number = arr.length - 1): number {
    // Base case: If the left index exceeds the right index, target not found
    if (left > right) {
        return -1;
    }

    // Calculate the middle index
    const mid = Math.floor((left + right) / 2);

    // Check if the middle element is the target
    if (arr[mid] === target) {
        return mid; // Target found
    }

    // If target is less than the middle element, search in the left subarray
    if (target < arr[mid]) {
        return binarySearch(arr, target, left, mid - 1);
    } else {
        // If target is greater, search in the right subarray
        return binarySearch(arr, target, mid + 1, right);
    }
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;
const result = binarySearch(sortedArray, target);

console.log(result); // Output: 4 (the index of the target in the array)
