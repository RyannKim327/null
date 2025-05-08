function interpolationSearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        // Estimate the position
        const pos = low + Math.floor(((target - arr[low]) / (arr[high] - arr[low])) * (high - low));

        // Check if the estimated position contains the target
        if (arr[pos] === target) {
            return pos; // Target found
        }

        // If target is greater, ignore the left half
        if (arr[pos] < target) {
            low = pos + 1;
        }
        // If target is smaller, ignore the right half
        else {
            high = pos - 1;
        }
    }

    return -1; // Target not found
}

// Example Usage
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const target = 70;
const index = interpolationSearch(arr, target);

if (index !== -1) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log('Element not found');
}
