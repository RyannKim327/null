function binarySearch(arr: number[], target: number, left: number = 0, right: number = arr.length - 1): number {
    // Base case: if the left index exceeds the right index, the target is not found
    if (left > right) {
        return -1; // target not found
    }

    // Calculate the middle index
    const mid: number = Math.floor((left + right) / 2);

    // Check if the middle element is the target
    if (arr[mid] === target) {
        return mid; // Target found
    }

    // If the target is less than the middle element, search in the left half
    if (target < arr[mid]) {
        return binarySearch(arr, target, left, mid - 1);
    } else {
        // If the target is greater than the middle element, search in the right half
        return binarySearch(arr, target, mid + 1, right);
    }
}

// Example usage:
const sortedArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target: number = 7;
const result: number = binarySearch(sortedArray, target);

if (result !== -1) {
    console.log(`Target found at index: ${result}`);
} else {
    console.log('Target not found');
}
