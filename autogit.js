function binarySearchRecursive(arr, target, low, high) {
    if (low > high) {
        return -1;
    }

    let mid = Math.floor((low + high) / 2);
    
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] > target) {
        return binarySearchRecursive(arr, target, low, mid - 1);
    } else {
        return binarySearchRecursive(arr, target, mid + 1, high);
    }
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let target = 6;

let result = binarySearchRecursive(array, target, 0, array.length - 1);
console.log(result); // Output: 5 (index of the target element in the array)
