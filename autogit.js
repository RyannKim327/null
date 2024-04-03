function binarySearch(sortedArray, target) {
    let left = 0;
    let right = sortedArray.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (sortedArray[mid] === target) {
            return mid;
        } else if (sortedArray[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // target not found
}

// Test the binary search function
const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 7;
const index = binarySearch(arr, target);

if (index !== -1) {
    console.log(`Found ${target} at index ${index}`);
} else {
    console.log(`${target} not found in the array`);
}
