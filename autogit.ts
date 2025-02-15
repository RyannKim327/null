function interpolationSearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        // Estimate the position using the interpolation formula
        const pos = low + Math.floor(((high - low) / (arr[high] - arr[low])) * (target - arr[low]));

        // Check if the estimated position holds the target value
        if (arr[pos] === target) {
            return pos; // Target found
        }

        // If target is larger, adjust the low bound
        if (arr[pos] < target) {
            low = pos + 1;
        }
        // If target is smaller, adjust the high bound
        else {
            high = pos - 1;
        }
    }

    return -1; // Target not found
}

// Example usage:
const sortedArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const targetValue = 70;
const resultIndex = interpolationSearch(sortedArray, targetValue);

if (resultIndex !== -1) {
    console.log(`Target found at index: ${resultIndex}`);
} else {
    console.log('Target not found in the array.');
}
