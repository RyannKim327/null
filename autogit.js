function interpolationSearch(arr, x) {
    let low = 0;
    let high = arr.length - 1;
    
    while (low <= high && x >= arr[low] && x <= arr[high]) {
        if (low == high) {
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
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const searchValue = 5;
const index = interpolationSearch(arr, searchValue);

if (index !== -1) {
    console.log(`${searchValue} found at index: ${index}`);
} else {
    console.log(`${searchValue} not found`);
}
