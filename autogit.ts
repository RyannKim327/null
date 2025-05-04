function interpolationSearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        // Calculate the position using interpolation formula
        const pos = low + Math.floor(((high - low) / (arr[high] - arr[low])) * (target - arr[low]));

        if (arr[pos] === target) {
            return pos; // Target found
        } else if (arr[pos] < target) {
            low = pos + 1; // Move the lower bound up
        } else {
            high = pos - 1; // Move the upper bound down
        }
    }

    return -1; // Target not found
}

// Example usage
const sortedArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const target = 70;

const index = interpolationSearch(sortedArray, target);
if (index !== -1) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log('Element not found');
}
