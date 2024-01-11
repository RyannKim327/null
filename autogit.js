function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Found the target, return the index
        } else if (arr[mid] < target) {
            left = mid + 1; // Target is in the right half
        } else {
            right = mid - 1; // Target is in the left half
        }
    }

    return -1; // Target not found
}

// Example usage
const arr = [2, 4, 6, 8, 10, 12, 14];
const target = 10;
const index = binarySearch(arr, target);
console.log(index); // Output: 4
