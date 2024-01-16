function binarySearchRecursive(arr, item, low = 0, high = arr.length - 1) {
    // ...
}
function binarySearchRecursive(arr, item, low = 0, high = arr.length - 1) {
    if (low > high) {
        return -1;
    }
    // ...
}
function binarySearchRecursive(arr, item, low = 0, high = arr.length - 1) {
    if (low > high) {
        return -1;
    }
    
    const mid = Math.floor((low + high) / 2);
    // ...
}
function binarySearchRecursive(arr, item, low = 0, high = arr.length - 1) {
    if (low > high) {
        return -1;
    }
   
    const mid = Math.floor((low + high) / 2);
   
    if (arr[mid] === item) {
        return mid;
    } else if (arr[mid] > item) {
        return binarySearchRecursive(arr, item, low, mid - 1);
    } else {
        return binarySearchRecursive(arr, item, mid + 1, high);
    }
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const item = 6;
const index = binarySearchRecursive(arr, item);

console.log(index); // Output: 5 (index of the item in the array)
