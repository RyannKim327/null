function binarySearchRecursive(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) {
        return -1;
    }

    let middle = Math.floor((start + end) / 2);

    if (arr[middle] === target) {
        return middle;
    } else if (arr[middle] < target) {
        return binarySearchRecursive(arr, target, middle + 1, end);
    } else {
        return binarySearchRecursive(arr, target, start, middle - 1);
    }
}

// Example usage:
const array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 9;
const index = binarySearchRecursive(array, target);

if (index !== -1) {
    console.log(`Found at index ${index}`);
} else {
    console.log("Element not found");
}
