function findKthSmallestElement(arr, k) {
    arr.sort((a, b) => a - b);
    return arr[k - 1];
}

const array = [3, 1, 4, 2, 5];
const k = 3;

const kthSmallestElement = findKthSmallestElement(array, k);
console.log(`The ${k}th smallest element in the array is: ${kthSmallestElement}`);
