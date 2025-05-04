function interpolationSearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        // Prevent division by zero if arr[high] == arr[low]
        if (arr[high] === arr[low]) {
            if (arr[low] === target) {
                return low; // Target found
            }
            return -1; // Target not found
        }

        // Interpolation formula to estimate the position
        const pos = low + Math.floor(((high - low) / (arr[high] - arr[low])) * (target - arr[low]));

        // Check if the target value is at the computed position
        if (arr[pos] === target) {
            return pos; // Target found
        }

        // If the target is greater, ignore the left side
        if (arr[pos] < target) {
            low = pos + 1;
        } else {
            // If the target is smaller, ignore the right side
            high = pos - 1;
        }
    }

    return -1; // Target not found
}

// Example usage:
const data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const target = 70;
const index = interpolationSearch(data, target);

if (index !== -1) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log("Element not found");
}
