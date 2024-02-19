function binarySearchRecursive(arr, target, low, high) {
    if (low > high) {
        return -1;
    }

    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, high);
    } else {
        return binarySearchRecursive(arr, target, low, mid - 1);
    }
}

// Example usage
const array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target = 9;
const index = binarySearchRecursive(array, target, 0, array.length - 1);

if (index !== -1) {
    console.log(`Element found at index: ${index}`);
} else {
    console.log('Element not found');
}
