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

    return -1; // Return -1 if target is not found
}

// Example usage
const arr = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 7;

const index = binarySearch(arr, target);
if (index !== -1) {
    console.log(`Found ${target} at index ${index}`);
} else {
    console.log(`${target} not found`);
}
