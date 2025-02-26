function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // Check if target is present at mid
        if (arr[mid] === target) {
            return mid; // Target found
        }

        // If target is greater, ignore left half
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            // If target is smaller, ignore right half
            right = mid - 1;
        }
    }

    return -1; // Target not found
}

// Example usage:
const arr = [1, 3, 5, 7, 9, 11];
const target = 7;
const result = binarySearch(arr, target);

if (result !== -1) {
    console.log(`Target found at index: ${result}`);
} else {
    console.log("Target not found");
}
