function findKthSmallestElement(arr, k) {
    if (k < 1 || k > arr.length) {
        return null;
    }

    arr.sort((a, b) => a - b);
    
    return arr[k - 1];
}

// Example
const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const k = 3;
const kthSmallest = findKthSmallestElement(array, k);

console.log(`The ${k}th smallest element is: ${kthSmallest}`);
