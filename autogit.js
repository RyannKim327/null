function findKthSmallestElement(arr, k) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);
    
    // Return the kth smallest element
    return arr[k - 1];
}

// Example usage
const array = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const k = 4;
const kthSmallest = findKthSmallestElement(array, k);
console.log(`The ${k}th smallest element in the array is: ${kthSmallest}`);
