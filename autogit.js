function binarySearch(arr, target, start=0, end=arr.length - 1) {
    if (start > end) {
        return -1; // element not found
    }

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        return mid; // element found
    } else if (arr[mid] > target) {
        return binarySearch(arr, target, start, mid - 1); // search left half
    } else {
        return binarySearch(arr, target, mid + 1, end); // search right half
    }
}

// Example usage
let arr = [1, 3, 5, 7, 9, 11, 13];
let target = 7;
let index = binarySearch(arr, target);

if (index !== -1) {
    console.log(`Element found at index ${index}`);
} else {
    console.log("Element not found in the array");
}
