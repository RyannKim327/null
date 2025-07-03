function interpolationSearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        // Handle the case where arr[low] == arr[high]
        if (arr[low] === arr[high]) {
            if (arr[low] === target) {
                return low; // Found target at position low
            } else {
                return -1; // Target not found
            }
        }

        // Estimate the position
        const pos = low + Math.floor(
            ((target - arr[low]) * (high - low)) / (arr[high] - arr[low])
        );

        // Check if pos is within bounds
        if (pos < low || pos > high) {
            return -1; // Target not found
        }

        if (arr[pos] === target) {
            return pos;
        }

        if (arr[pos] < target) {
            low = pos + 1;
        } else {
            high = pos - 1;
        }
    }

    return -1; // Target not found
}

// Example usage:
const sortedArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const targetValue = 70;
const index = interpolationSearch(sortedArray, targetValue);

if (index !== -1) {
    console.log(`Found ${targetValue} at index ${index}`);
} else {
    console.log(`${targetValue} not found in array.`);
}
