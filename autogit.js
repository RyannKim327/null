function binarySearchRecursive(arr, key, low, high) {
    if (low > high) {
        return -1;
    }

    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === key) {
        return mid;
    } else if (arr[mid] > key) {
        return binarySearchRecursive(arr, key, low, mid - 1);
    } else {
        return binarySearchRecursive(arr, key, mid + 1, high);
    }
}

// Example usage
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const searchKey = 5;
const index = binarySearchRecursive(array, searchKey, 0, array.length - 1);

if (index !== -1) {
    console.log(`Element found at index ${index}`);
} else {
    console.log('Element not found');
}
