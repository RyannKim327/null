function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    return -1; // Target not found
}

// Example usage
const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const target = 23;
const result = binarySearch(arr, target);

if (result !== -1) {
    console.log(`Target ${target} found at index ${result}`);
} else {
    console.log(`Target ${target} not found`);
}
