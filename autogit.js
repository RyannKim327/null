function interpolationSearch(arr, x) {
    let low = 0;
    let high = arr.length - 1;
    
    while (low <= high && x >= arr[low] && x <= arr[high]) {
        let pos = low + Math.floor(((x - arr[low]) * (high - low)) / (arr[high] - arr[low]));
        
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
let arr = [1, 3, 5, 7, 9, 11, 13, 15];
let x = 9;
let result = interpolationSearch(arr, x);

if (result !== -1) {
    console.log(`${x} found at index ${result}`);
} else {
    console.log(`${x} not found`);
}
