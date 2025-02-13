function interpolationSearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        // Calculate the position using interpolation formula
        const pos = low + Math.floor(((high - low) / (arr[high] - arr[low])) * (target - arr[low]));

        // Check if the target is at the position
        if (arr[pos] === target) {
            return pos; // Return the index of the target
        }

        // If target is larger, target is in upper part
        if (arr[pos] < target) {
            low = pos + 1; // move the low pointer up
        } else {
            high = pos - 1; // move the high pointer down
        }
    }

    // Target not found
    return -1;
}

// Example usage:
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const target = 70;

const result = interpolationSearch(arr, target);
console.log(result); // Output should be 6 (the index of 70)
