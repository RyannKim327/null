function findKthSmallestElement(arr, k) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);
    
    // Return the kth smallest element
    return arr[k - 1];
}

// Test the function
const arr = [3, 1, 4, 1, 5, 9, 2, 6];
const k = 4;
const kthSmallestElement = findKthSmallestElement(arr, k);

console.log(`The ${k}th smallest element in the array is: ${kthSmallestElement}`);
