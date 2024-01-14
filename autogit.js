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

    return -1; // return -1 if target is not found
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 9;

const result = binarySearch(sortedArray, target);
if (result !== -1) {
    console.log(`Target found at index ${result}`);
} else {
    console.log(`Target not found`);
}
