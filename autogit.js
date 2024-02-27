function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid; // return the index where the target is found
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1; // return -1 if target is not found
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7];
const target = 5;
const result = binarySearch(sortedArray, target);

if (result !== -1) {
    console.log(`Target ${target} found at index ${result}.`);
} else {
    console.log(`Target ${target} not found.`);
}
