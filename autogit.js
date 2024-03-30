function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    
    return -1; // Return -1 if the target is not found
}

// Example
let arr = [1, 3, 5, 7, 9, 11, 13, 15];
let target = 7;
let result = binarySearch(arr, target);

if (result !== -1) {
    console.log(`Target ${target} found at index ${result}`);
} else {
    console.log(`Target ${target} not found`);
}
