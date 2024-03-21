function interpolationSearch(arr, x) {
    let lo = 0;
    let hi = arr.length - 1;

    while (lo <= hi && x >= arr[lo] && x <= arr[hi]) {
        if (lo === hi) {
            if (arr[lo] === x) return lo;
            return -1;
        }

        let pos = lo + Math.floor(((hi - lo) / (arr[hi] - arr[lo])) * (x - arr[lo]));

        if (arr[pos] === x) return pos;
        if (arr[pos] < x) lo = pos + 1;
        else hi = pos - 1;
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
    console.log('Element not found');
}
