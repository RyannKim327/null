function interpolationSearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        // Estimate the position of the target
        const pos = low + Math.floor(((target - arr[low]) / (arr[high] - arr[low])) * (high - low));

        // Check if the element at the estimated position is the target
        if (arr[pos] === target) {
            return pos; // Target found at position pos
        }

        // If target is greater than the value at estimated position, narrow down to the right subarray
        if (arr[pos] < target) {
            low = pos + 1;
        }
        // If target is smaller than the value at estimated position, narrow down to the left subarray
        else {
            high = pos - 1;
        }
    }

    return -1; // Target not found
}

// Example usage
const sortedArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const target = 70;
const index = interpolationSearch(sortedArray, target);

if (index !== -1) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log("Element not found");
}
