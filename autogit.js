function findKthSmallest(arr, k) {
    if (k < 1 || k > arr.length) {
        return null;
    }

    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    return arr[k - 1]; // kth smallest element
}

// Example usage
const array = [3, 1, 4, 1, 5, 9, 2, 6];
const k = 3;
const kthSmallest = findKthSmallest(array, k);

console.log(`The ${k}th smallest element is: ${kthSmallest}`);
