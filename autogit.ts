function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        // Check if the target is present at mid
        if (arr[mid] === target) {
            return mid; // Target found
        }

        // If target is greater, ignore the left half
        if (arr[mid] < target) {
            left = mid + 1;
        }
        // If target is smaller, ignore the right half
        else {
            right = mid - 1;
        }
    }

    // Target was not found
    return -1;
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;

const result = binarySearch(arr, target);
console.log(result); // Output: 4 (index of the target)
