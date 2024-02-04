function binarySearchRecursive(arr, target, start, end) {
    if (start > end) {
        return -1;
    }
    
    const mid = Math.floor((start + end) / 2);

    if (target === arr[mid]) {
        return mid;
    } else if (target < arr[mid]) {
        return binarySearchRecursive(arr, target, start, mid - 1);
    } else {
        return binarySearchRecursive(arr, target, mid + 1, end);
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 7;

const result = binarySearchRecursive(arr, target, 0, arr.length - 1);
console.log(result);   // Output: 6 (index of target element)
