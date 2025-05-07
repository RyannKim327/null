/**
 * Interpolation search function
 * @param arr - Sorted array of numbers
 * @param target - The value to search for
 * @returns The index of the target value or -1 if not found
 */
function interpolationSearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        // Avoid division by zero
        if (arr[high] === arr[low]) {
            if (arr[low] === target) {
                return low;
            }
            return -1;
        }

        // Estimate the position of the target
        const pos = low + Math.floor(((high - low) / (arr[high] - arr[low])) * (target - arr[low]));

        // Check if the target is found
        if (arr[pos] === target) {
            return pos;
        }

        // If target is greater, ignore left half
        if (arr[pos] < target) {
            low = pos + 1;
        }
        // If target is smaller, ignore right half
        else {
            high = pos - 1;
        }
    }
    return -1; // Target not found
}

// Example usage
const sortedArray: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const targetValue: number = 70;

const index = interpolationSearch(sortedArray, targetValue);
if (index !== -1) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log('Element not found');
}
