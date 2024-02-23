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

    return -1;
}

// Example usage
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const targetValue = 7;
const index = binarySearch(sortedArray, targetValue);

if (index !== -1) {
    console.log(`Found ${targetValue} at index ${index}`);
} else {
    console.log(`${targetValue} not found in the array`);
}
