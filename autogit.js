function binarySearchRecursive(arr, target, start=0, end=arr.length-1) {
    // Base case: if the start index is greater than the end index, it means the target is not found
    if (start > end) {
        return -1;
    }

    // Calculate the middle index
    let mid = Math.floor((start + end) / 2);

    // If the target is found at the middle index, return the index
    if (arr[mid] === target) {
        return mid;
    }

    // If the target is less than the value at the middle index, search the left half of the array
    if (target < arr[mid]) {
        return binarySearchRecursive(arr, target, start, mid - 1);
    }

    // If the target is greater than the value at the middle index, search the right half of the array
    return binarySearchRecursive(arr, target, mid + 1, end);
}

// Example usage
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const target = 11;
const index = binarySearchRecursive(arr, target);

if (index !== -1) {
    console.log(`Element found at index ${index}`);
} else {
    console.log("Element not found");
}
