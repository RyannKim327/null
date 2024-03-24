function findKthSmallestElement(arr, k) {
    // Sort the array
    arr.sort((a, b) => a - b);

    // Return the kth smallest element
    return arr[k - 1];
}

// Example usage
const arr = [3, 1, 4, 1, 5, 9, 2, 6];
const k = 3;
const kthSmallest = findKthSmallestElement(arr, k);
console.log(`The ${k}th smallest element is: ${kthSmallest}`);
