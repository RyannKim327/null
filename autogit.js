function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            return mid; // target found
        }

        if (target < arr[mid]) {
            end = mid - 1; // search in left half
        } else {
            start = mid + 1; // search in right half
        }
    }

    return -1; // target not found
}

// Example usage:
const array = [2, 4, 6, 8, 10, 12, 14];
const target = 8;
const index = binarySearch(array, target);
console.log(`Element ${target} found at index ${index}`);
