function interpolationSearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        // Calculate the position using the interpolation formula
        const pos = low + Math.floor(((high - low) / (arr[high] - arr[low])) * (target - arr[low]));

        // Check if the target is present at pos
        if (arr[pos] === target) {
            return pos; // Target found
        }

        // If target is greater, ignore left half
        if (arr[pos] < target) {
            low = pos + 1;
        }
        // If target is smaller, ignore right half
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
console.log(result); // Output: 6 (index of target)
