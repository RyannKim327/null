function kthSmallest(arr, k) {
    if (k < 1 || k > arr.length) {
        return null;
    }

    arr.sort((a, b) => a - b);

    return arr[k - 1];
}

let arr = [3, 6, 2, 8, 4, 5];
let k = 3;

console.log(kthSmallest(arr, k)); // Output: 4
