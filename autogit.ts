function interpolationSearch(arr: number[], x: number): number {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && x >= arr[low] && x <= arr[high]) {
        // Estimate the position of the search key
        const pos = low + Math.floor(((high - low) / (arr[high] - arr[low])) * (x - arr[low]));

        // Check if the element at the estimated position is the key
        if (arr[pos] === x) {
            return pos; // Element found
        }

        // If the key is larger, we narrow our search to the upper half
        if (arr[pos] < x) {
            low = pos + 1;
        } 
        // If the key is smaller, we narrow our search to the lower half
        else {
            high = pos - 1;
        }
    }

    return -1; // Element not found
}

// Example usage
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const key = 70;
const index = interpolationSearch(arr, key);

if (index !== -1) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log("Element not found");
}
