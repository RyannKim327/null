function findKthSmallest(arr, k) {
    // Sort the array
    arr.sort(function(a, b) {
        return a - b;
    });

    // Return the kth smallest element
    return arr[k - 1];
}

// Example usage
const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const k = 3;
const kthSmallest = findKthSmallest(arr, k);
console.log(`The ${k}th smallest element is: ${kthSmallest}`);
