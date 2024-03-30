function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid; // Return the index of the target
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1; // Return -1 if the target is not found
}

// Example usage
let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
let target = 11;
let result = binarySearch(arr, target);

if (result !== -1) {
    console.log(`Target ${target} found at index ${result}`);
} else {
    console.log(`Target ${target} not found`);
}
