function interpolationSearch(arr, x) {
    let low = 0;
    let high = arr.length - 1;
    
    while (low <= high && x >= arr[low] && x <= arr[high]) {
        let pos = Math.floor(low + ((x - arr[low]) * (high - low)) / (arr[high] - arr[low]));

        if (arr[pos] === x) {
            return pos;
        } else if (arr[pos] < x) {
            low = pos + 1;
        } else {
            high = pos - 1;
        }
    }

    return -1;
}

// Example usage
const sortedArray = [2, 4, 6, 8, 10, 12, 14, 16, 18];
const target = 10;
const resultIndex = interpolationSearch(sortedArray, target);

if (resultIndex !== -1) {
    console.log(`${target} found at index ${resultIndex}`);
} else {
    console.log(`${target} not found in the array`);
}
