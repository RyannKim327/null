function findKthSmallestElement(arr, k) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    // Return the kth smallest element (k-1 because array is 0-indexed)
    return arr[k - 1];
}

// Test the function
const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const k = 3;
const kthSmallestElement = findKthSmallestElement(array, k);

console.log(`The ${k}th smallest element in the array is: ${kthSmallestElement}`);
