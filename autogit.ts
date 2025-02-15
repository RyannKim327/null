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

        // Estimate the position
        const pos = low + Math.floor(((high - low) / (arr[high] - arr[low])) * (target - arr[low]));

        // Check for target
        if (arr[pos] === target) {
            return pos;
        }

        if (arr[pos] < target) {
            low = pos + 1; // Move to the right half
        } else {
            high = pos - 1; // Move to the left half
        }
    }
    
    return -1; // Target not found
}

// Example usage
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const target = 70;
const index = interpolationSearch(arr, target);

console.log(`Element found at index: ${index}`); // Output: Element found at index: 6
