function interpolationSearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        // Check for division by zero
        if (arr[high] === arr[low]) {
            if (arr[low] === target) {
                return low; // Target found
            }
            return -1; // Target not found
        }

        // Estimate the position
        const pos = low + Math.floor(((high - low) / (arr[high] - arr[low])) * (target - arr[low]));

        // Check if the estimated position holds the target
        if (arr[pos] === target) {
            return pos; // Target found
        }

        // Adjust the boundaries based on comparison
        if (arr[pos] < target) {
            low = pos + 1; // Target is higher, move up
        } else {
            high = pos - 1; // Target is lower, move down
        }
    }

    return -1; // Target not found
}

// Example usage:
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const target = 70;

const result = interpolationSearch(arr, target);

if (result !== -1) {
    console.log(`Element found at index: ${result}`);
} else {
    console.log("Element not found");
}
