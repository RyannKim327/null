function interpolationSearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        // Estimate the position of the target
        const pos = low + Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));

        // Check if the target is found
        if (arr[pos] === target) {
            return pos;
        }

        // If target is larger, ignore left half
        if (arr[pos] < target) {
            low = pos + 1;
        }
        // If target is smaller, ignore right half
        else {
            high = pos - 1;
        }
    }

    // Target was not found
    return -1;
}

// Example usage:
const sortedArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const targetValue = 70;
const index = interpolationSearch(sortedArray, targetValue);

if (index !== -1) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log("Element not found in the array.");
}
