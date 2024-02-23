function findKthSmallestElement(arr, k) {
    arr.sort((a, b) => a - b); // Sort the array in ascending order
    return arr[k - 1]; // Return the kth smallest element (indexed at k-1)
}

// Example usage
const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const k = 3;
const kthSmallest = findKthSmallestElement(arr, k);

console.log(`The ${k}th smallest element in the array is: ${kthSmallest}`);
