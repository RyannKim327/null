function kthSmallest(arr, k) {
    arr.sort((a, b) => a - b);
    return arr[k - 1];
}

// Example
const array = [3, 1, 4, 2, 5];
const k = 3;

const result = kthSmallest(array, k);
console.log(`The ${k}th smallest element is: ${result}`);
