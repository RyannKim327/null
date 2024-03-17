function interpolationSearch(arr, x) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high && x >= arr[low] && x <= arr[high]) {
        let position = low + Math.floor(((x - arr[low]) * (high - low)) / (arr[high] - arr[low]));

        if (arr[position] === x) {
            return position;
        }

        if (arr[position] < x) {
            low = position + 1;
        } else {
            high = position - 1;
        }
    }

    return -1;
}

// Testing the interpolation search algorithm
let arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let x = 12;
let index = interpolationSearch(arr, x);

if (index !== -1) {
    console.log(`${x} found at index ${index}`);
} else {
    console.log(`${x} not found in the array`);
}
