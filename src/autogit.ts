function interpolationSearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        // To avoid division by zero, check if the array element at low is equal to high
        if (arr[low] === arr[high]) {
            if (arr[low] === target) {
                return low; // Found the target
            }
            return -1; // Target is not in the array
        }

        // Estimate the position using the interpolation formula
        const pos = low + Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));

        // Check if the estimated position has the target value
        if (arr[pos] === target) {
            return pos; // Found the target
        }

        // If target is smaller, narrow the search to the left
        if (arr[pos] > target) {
            high = pos - 1;
        } else {
            // If target is larger, narrow the search to the right
            low = pos + 1;
        }
    }

    return -1; // Target is not found
}

// Example usage
const sortedArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const target = 70;
const result = interpolationSearch(sortedArray, target);

if (result !== -1) {
    console.log(`Element found at index: ${result}`);
} else {
    console.log("Element not found");
}
