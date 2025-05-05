function interpolationSearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        // Avoid division by zero
        if (arr[high] === arr[low]) {
            if (arr[low] === target) {
                return low; // Found target
            }
            return -1; // Target not found
        }
        
        // Estimate the position of the target
        const pos = low + Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));

        // Check if the estimated position contains the target
        if (arr[pos] === target) {
            return pos; // Found target
        }
        
        // If target is larger, target is in the upper part
        if (arr[pos] < target) {
            low = pos + 1;
        } else { // If target is smaller, target is in the lower part
            high = pos - 1;
        }
    }

    return -1; // Target not found
}

// Example usage
const array = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const target = 50;

const index = interpolationSearch(array, target);
if (index !== -1) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log('Element not found in the array.');
}
