function interpolationSearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;

    // Continue searching while the target is within the range
    while (low <= high && target >= arr[low] && target <= arr[high]) {
        // Avoid division by zero if all elements are the same
        if (arr[high] === arr[low]) {
            if (arr[low] === target) {
                return low; // All elements are the same and equal to target
            }
            break; // Target not found
        }

        // Estimate the position of the target
        const pos = low + Math.floor(
            ((high - low) / (arr[high] - arr[low])) * (target - arr[low])
        );

        // Check if the estimated position contains the target
        if (arr[pos] === target) {
            return pos; // Target found
        }

        // Adjust the search range
        if (arr[pos] < target) {
            low = pos + 1; // Search in the upper half
        } else {
            high = pos - 1; // Search in the lower half
        }
    }

    return -1; // Target not found
}
const sortedArray = [10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47];
const target = 22;

const result = interpolationSearch(sortedArray, target);

if (result !== -1) {
    console.log(`Element found at index ${result}`);
} else {
    console.log("Element not found in the array");
}
Element found at index 8
