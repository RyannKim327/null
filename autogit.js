function kthSmallestElement(array, k) {
    if (k < 1 || k > array.length) {
        return null; // Out of bounds
    }

    array.sort((a, b) => a - b); // Sort the array in ascending order

    return array[k - 1]; // Return the kth smallest element
}

// Example usage
const arr = [3, 1, 4, 1, 5, 9, 2, 6];
const k = 3;
const kthSmallest = kthSmallestElement(arr, k);

console.log(`The ${k}th smallest element is: ${kthSmallest}`);
