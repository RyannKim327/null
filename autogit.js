function findKthSmallest(arr, k) {
    arr.sort(function(a, b) {
        return a - b;
    });
    
    return arr[k - 1];
}

// Example
const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const k = 3;
const kthSmallest = findKthSmallest(array, k);

console.log(`The ${k}th smallest element in the array is: ${kthSmallest}`);
