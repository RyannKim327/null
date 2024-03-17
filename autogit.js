function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Element not found
}

// Example usage
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const targetElement = 7;
const resultIndex = binarySearch(sortedArray, targetElement);

if (resultIndex !== -1) {
    console.log(`Element found at index ${resultIndex}`);
} else {
    console.log(`Element not found in the array`);
}
