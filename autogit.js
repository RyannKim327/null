function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // return -1 if target element is not found
}

// Example usage
const arr = [1, 3, 5, 7, 9, 11, 13];
const target = 7;
const index = binarySearch(arr, target);

if (index !== -1) {
    console.log(`${target} found at index ${index}`);
} else {
    console.log(`${target} not found in the array`);
}
