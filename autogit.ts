function interpolationSearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        // Probing the position with the formula
        const pos = low + Math.floor(((target - arr[low]) / (arr[high] - arr[low])) * (high - low));

        // Check if the target is found
        if (arr[pos] === target) {
            return pos; // Target found, return its index
        }

        // If target is larger, we search in the right sub-array
        if (arr[pos] < target) {
            low = pos + 1;
        } 
        // If target is smaller, we search in the left sub-array
        else {
            high = pos - 1;
        }
    }

    return -1; // If the target is not found, return -1
}

// Example usage
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const target = 70;

const index = interpolationSearch(arr, target);
if (index !== -1) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log("Element not found in the array.");
}
