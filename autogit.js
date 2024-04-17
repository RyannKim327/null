function interpolationSearch(arr, x) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && x >= arr[low] && x <= arr[high]) {
        if (low === high) {
            if (arr[low] === x) return low;
            return -1;
        }

        let pos = low + Math.floor(((high - low) / (arr[high] - arr[low])) * (x - arr[low]));

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
const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const x = 23;
const index = interpolationSearch(arr, x);
console.log(index);
