function kthSmallestElement(arr, k) {
    arr.sort(function(a, b) {
        return a - b;
    });

    return arr[k - 1];
}

const array = [4, 2, 8, 1, 3, 9];
const k = 3;
const result = kthSmallestElement(array, k);
console.log(result); // Output: 3
