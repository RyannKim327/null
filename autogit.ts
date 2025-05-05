function interpolationSearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        if (low === high) {
            if (arr[low] === target) return low;
            return -1;
        }

        // Estimate the position using interpolation formula
        const pos =
            low +
            Math.floor(
                ((target - arr[low]) * (high - low)) / (arr[high] - arr[low])
            );

        if (arr[pos] === target) {
            return pos; // Found target
        } else if (arr[pos] < target) {
            low = pos + 1; // Target is in upper part
        } else {
            high = pos - 1; // Target is in lower part
        }
    }
    return -1; // Target not found
}
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const target = 70;

const index = interpolationSearch(arr, target);
console.log(`Found target at index: ${index}`);  // Output: Found target at index: 6
