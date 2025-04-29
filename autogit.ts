function binarySearchRecursive(arr: number[], target: number, low: number = 0, high: number = arr.length - 1): number {
    if (low > high) {
        return -1; // target not found
    }

    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] > target) {
        return binarySearchRecursive(arr, target, low, mid - 1);
    } else {
        return binarySearchRecursive(arr, target, mid + 1, high);
    }
}
const sortedArray = [1, 3, 5, 7, 9, 11];
console.log(binarySearchRecursive(sortedArray, 7)); // 3
console.log(binarySearchRecursive(sortedArray, 4)); // -1
