function interpolationSearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        // Estimate the position of the target value
        const pos = low + Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));

        // Check if the estimated position is the target
        if (arr[pos] === target) {
            return pos; // Target found
        }

        // If the target is greater, ignore the left half
        if (arr[pos] < target) {
            low = pos + 1;
        } else {
            // If the target is smaller, ignore the right half
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
    console.log(`Element found at index: ${resultIndex}`);
} else {
    console.log('Element not found in the array.');
}
