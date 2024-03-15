function interpolationSearch(arr, x) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && x >= arr[low] && x <= arr[high]) {
        if (low == high) {
            if (arr[low] == x) return low;
            return -1;
        }

        let pos = low + Math.floor(((x - arr[low]) * (high - low)) / (arr[high] - arr[low]));

        if (arr[pos] == x) return pos;
        if (arr[pos] < x) low = pos + 1;
        else high = pos - 1;
    }

    return -1;
}

// Example usage
const arr = [2, 4, 6, 8, 10, 12, 14, 16];
const x = 10;

const result = interpolationSearch(arr, x);

if (result !== -1) {
    console.log(`Element found at index ${result}`);
} else {
    console.log("Element not found");
}
