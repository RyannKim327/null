function interpolationSearch(arr: number[], target: number): number {
    const n = arr.length;
    
    // if the array is empty or the target is out of range
    if (n === 0 || target < arr[0] || target > arr[n - 1]) {
        return -1; // not found
    }

    let low = 0;
    let high = n - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        // Estimating the position using interpolation formula
        const pos = low + Math.floor(((high - low) / (arr[high] - arr[low])) * (target - arr[low]));

        // Check if the target is found at the estimated position
        if (arr[pos] === target) {
            return pos; // target found
        }

        // If target is larger, target is in the upper part
        if (arr[pos] < target) {
            low = pos + 1;
        } 
        // If target is smaller, target is in the lower part
        else {
            high = pos - 1;
        }
    }

    return -1; // target not found
}

// Example usage:
const sortedArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const target = 70;
const result = interpolationSearch(sortedArray, target);

if (result === -1) {
    console.log("Element not found.");
} else {
    console.log("Element found at index:", result);
}
