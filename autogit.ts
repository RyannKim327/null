function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        // Calculate the mid index
        const mid = Math.floor((left + right) / 2);

        // Check if the target is at mid
        if (arr[mid] === target) {
            return mid; // Target found, return the index
        } 
        // If target is greater, ignore the left half
        else if (arr[mid] < target) {
            left = mid + 1;
        } 
        // If target is smaller, ignore the right half
        else {
            right = mid - 1;
        }
    }

    // Target is not present in the array
    return -1; 
}

// Example usage
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 7;

const result = binarySearch(sortedArray, target);

if (result !== -1) {
    console.log(`Target found at index: ${result}`);
} else {
    console.log('Target not found');
}
