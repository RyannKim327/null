function findKthSmallestElement(arr, k) {
    if (k <= 0 || k > arr.length) {
        return null;
    }

    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    return arr[k - 1];
}

// Example usage
const array = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const k = 3;
const kthElement = findKthSmallestElement(array, k);

console.log(`The ${k}th smallest element in the array is: ${kthElement}`);
