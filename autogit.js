function binarySearchRecursive(arr, target, start, end) {
    if (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (target < arr[mid]) {
            return binarySearchRecursive(arr, target, start, mid - 1);
        } else {
            return binarySearchRecursive(arr, target, mid + 1, end);
        }
    }

    return -1;
}

// Usage:
const array = [1, 2, 3, 4, 5, 6, 7];
const targetElement = 4;

const index = binarySearchRecursive(array, targetElement, 0, array.length - 1);
console.log(index); // Output: 3 (index of target element in the array)
