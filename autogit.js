function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1;
    }

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, right);
    } else {
        return binarySearchRecursive(arr, target, left, mid - 1);
    }
}

// Example usage
const array = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const target = 9;
const resultIndex = binarySearchRecursive(array, target);

if (resultIndex !== -1) {
    console.log(`Element found at index: ${resultIndex}`);
} else {
    console.log("Element not found in the array");
}
