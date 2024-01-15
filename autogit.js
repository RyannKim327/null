function interpolationSearch(arr, target, start = 0) {
    // Check if the array is empty or out of bounds
    if (arr.length === 0 || start >= arr.length || target < arr[0] || target > arr[arr.length - 1]) {
        return -1; // Element not found
    }

    // Calculate the mid index using interpolation formula
    let mid = Math.floor(start + ((target - arr[start]) * (arr.length - 1 - start)) / (arr[arr.length - 1] - arr[start]));

    // Check if the target is found at the mid index
    if (arr[mid] === target) {
        return mid; // Element found
    }

    // If the target is smaller, search in the left half of the array
    if (arr[mid] > target) {
        return interpolationSearch(arr, target, start);
    }

    // If the target is larger, search in the right half of the array
    if (arr[mid] < target) {
        return interpolationSearch(arr, target, mid + 1);
    }

    return -1; // Element not found
}
// Example usage
const arr = [1, 3, 5, 7, 9];
const target = 7;

const result = interpolationSearch(arr, target);

if (result === -1) {
    console.log("Element not found");
} else {
    console.log(`Element found at index ${result}`);
}
