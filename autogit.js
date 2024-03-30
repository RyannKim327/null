function findKthSmallest(arr, k) {
    arr.sort((a, b) => a - b);
    
    if (k < 1 || k > arr.length) {
        return null;
    }
    
    return arr[k - 1];
}

// Example usage
const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const k = 3;

const kthSmallest = findKthSmallest(array, k);
console.log(`${k}th smallest element is: ${kthSmallest}`);
