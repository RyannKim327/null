function binarySearchRecursive(arr, target, start, end) {
    if (start > end) {
        return -1;
    }

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, end);
    } else {
        return binarySearchRecursive(arr, target, start, mid - 1);
    }
}

// Example usage
let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17];
let target = 9;
let index = binarySearchRecursive(arr, target, 0, arr.length - 1);

if (index !== -1) {
    console.log(`Found ${target} at index ${index}`);
} else {
    console.log(`${target} not found in the array`);
}
