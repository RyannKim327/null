function findKthSmallest(arr, k) {
    arr.sort((a, b) => a - b);
    return arr[k - 1];
}

// Example usage
const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const k = 4;
const kthSmallest = findKthSmallest(array, k);
console.log(kthSmallest); // Output: 3
