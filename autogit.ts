function interpolationSearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        // Handle the case where the array contains all identical elements
        if (arr[high] === arr[low]) {
            if (arr[low] === target) return low;
            break;
        }

        // Calculate the probable position of the target
        const ratio = (target - arr[low]) / (arr[high] - arr[low]);
        const mid = low + Math.floor(ratio * (high - low));

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    // Not found
    return -1;
}
