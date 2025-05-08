function interpolationSearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        if (low === high) {
            if (arr[low] === target) {
                return low;
            }
            return -1;
        }

        // Calculate the position using the interpolation formula
        const pos = low + Math.floor(((high - low) / (arr[high] - arr[low])) * (target - arr[low]));

        // Check if target is present at pos
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

    return -1; // target is not found
}

// Example usage
const arr = [10, 20, 30, 40, 50];
const target = 30;

const result = interpolationSearch(arr, target);
if (result !== -1) {
    console.log(`Element found at index: ${result}`);
} else {
    console.log("Element not found.");
}
