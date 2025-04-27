function interpolationSearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        // Prevent division by zero
        if (arr[high] === arr[low]) {
            if (arr[low] === target) {
                return low;
            } else {
                return -1;
            }
        }

        // Estimate the position
        const pos = low + Math.floor(
            ((target - arr[low]) / (arr[high] - arr[low])) * (high - low)
        );

        // Check the estimated position
        if (arr[pos] === target) {
            return pos;
        }

        if (arr[pos] < target) {
            low = pos + 1;
        } else {
            high = pos - 1;
        }
    }

    // Not found
    return -1;
}
const data = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const index = interpolationSearch(data, 70);
console.log(index); // Output: 6
