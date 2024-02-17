function interpolationSearch(arr, x) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && x >= arr[low] && x <= arr[high]) {
        if (low === high) {
            if (arr[low] === x) return low;
            return -1;
        }

        let pos = low + Math.floor(((high - low) / (arr[high] - arr[low])) * (x - arr[low]);

        if (arr[pos] === x) return pos;

        if (arr[pos] < x) {
            low = pos + 1;
        } else {
            high = pos - 1;
        }
    }

    return -1;
}

// Example usage
const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const x = 5;
const index = interpolationSearch(arr, x);

if (index !== -1) {
    console.log(`Element ${x} found at index ${index}`);
} else {
    console.log(`Element ${x} not found`);
}
