function kthSmallestElement(arr, k) {
    arr.sort((a, b) => a - b);
    return arr[k - 1];
}

const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const k = 3;

const kthSmallest = kthSmallestElement(array, k);
console.log(`The ${k}th smallest element is: ${kthSmallest}`);
