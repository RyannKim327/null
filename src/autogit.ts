function binarySearch<T>(array: T[], target: T): number {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (array[mid] === target) {
            return mid; // Target found, return the index
        } else if (array[mid] < target) {
            left = mid + 1; // Search the right half
        } else {
            right = mid - 1; // Search the left half
        }
    }

    return -1; // Target not found
}

// Example usage
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 5;

const resultIndex = binarySearch(sortedArray, target);
if (resultIndex !== -1) {
    console.log(`Target found at index: ${resultIndex}`);
} else {
    console.log('Target not found');
}
