function interpolationSearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        // Calculate the position using the interpolation formula
        const pos = low + Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));

        // Check if the found position has the target value
        if (arr[pos] === target) {
            return pos; // Target found
        }

        // If target is greater, narrow down to the upper part
        if (arr[pos] < target) {
            low = pos + 1;
        } 
        // If target is smaller, narrow down to the lower part
        else {
            high = pos - 1;
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
    console.log(`Element not found in the array.`);
}
