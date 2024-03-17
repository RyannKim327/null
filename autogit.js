function findKthSmallest(arr, k) {
    arr.sort((a, b) => a - b);
    return arr[k - 1];
}

let array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let k = 4;
console.log(`The ${k}th smallest element in the array is: ${findKthSmallest(array, k)}`);
