function findKthSmallestElement(arr, k) {
    if (arr.length < k) {
        return null; // If k is greater than the array length
    }

    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    // Return the kth smallest element
    return arr[k - 1];
}

// Example usage
const arr = [3, 1, 4, 1, 5, 9, 2, 6];
const k = 4;
const kthSmallestElement = findKthSmallestElement(arr, k);

console.log(`The ${k}th smallest element is: ${kthSmallestElement}`);
