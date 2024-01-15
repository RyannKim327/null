function binarySearch(array, target, start = 0, end = array.length - 1) {
    if (start > end) {
        return -1;
    }

    const mid = Math.floor((start + end) / 2);

    if (array[mid] === target) {
        return mid;
    } else if (target < array[mid]) {
        return binarySearch(array, target, start, mid - 1);
    } else {
        return binarySearch(array, target, mid + 1, end);
    }
}

// Usage example
const arr = [2, 4, 7, 10, 15, 20];
const target = 10;
const index = binarySearch(arr, target);

console.log(`The target value ${target} is at index ${index}`);
