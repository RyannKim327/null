function findKthSmallestElement(arr, k) {
    arr.sort((a, b) => a - b); // Sort the array in ascending order
    return arr[k - 1]; // Return the kth smallest element
}

// Example usage
const array = [3, 5, 1, 4, 2];
const k = 3; // Find the 3rd smallest element
const kthSmallestElement = findKthSmallestElement(array, k);
console.log(`The ${k}th smallest element is: ${kthSmallestElement}`);
