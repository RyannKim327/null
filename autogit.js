function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            return mid; // found the target
        } else if (arr[mid] < target) {
            start = mid + 1; // target is in the right half
        } else {
            end = mid - 1; // target is in the left half
        }
    }

    return -1; // target was not found
}

// Example usage:
const arr = [2, 4, 6, 8, 10];
const target = 8;
console.log(binarySearch(arr, target)); // Output: 3
