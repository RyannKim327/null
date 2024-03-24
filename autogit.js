function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // If the target is not found in the array
}

// Example usage
const arr = [1, 3, 6, 9, 12, 15, 18, 21];
const target = 9;
const resultIndex = binarySearch(arr, target);

if (resultIndex !== -1) {
    console.log(`The target ${target} was found at index ${resultIndex}.`);
} else {
    console.log(`The target ${target} was not found in the array.`);
}
