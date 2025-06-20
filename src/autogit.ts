function interpolationSearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        // Avoid division by zero
        if (arr[high] === arr[low]) {
            if (arr[low] === target) {
                return low; // All elements in the range are equal
            }
            break;
        }

        // Estimate the position of the target
        const pos = low + Math.floor(
            ((target - arr[low]) * (high - low)) / (arr[high] - arr[low])
        );

        // Check if the estimated position contains the target
        if (arr[pos] === target) {
            return pos; // Target found
        }

        // Adjust the search range
        if (arr[pos] < target) {
            low = pos + 1; // Search in the upper part
        } else {
            high = pos - 1; // Search in the lower part
        }
    }

    return -1; // Target not found
}

// Example usage
const sortedArray = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const targetValue = 40;

const index = interpolationSearch(sortedArray, targetValue);
if (index !== -1) {
    console.log(`Element found at index ${index}`);
} else {
    console.log("Element not found");
}
