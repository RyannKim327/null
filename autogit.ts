function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // Check if the target is present at mid
        if (arr[mid] === target) {
            return mid; // Target found at index mid
        }
        
        // If target is greater, ignore the left half
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            // If target is smaller, ignore the right half
            right = mid - 1;
        }
    }

    // Target was not found in the array
    return -1; 
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;
const index = binarySearch(sortedArray, target);

console.log(index); // Output: 4 (the index of target 5 in the array)
