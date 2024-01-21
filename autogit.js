function binarySearchRecursive(arr, target, start, end) {
    if (start > end) {
        return -1;
    }

    let middle = Math.floor((start + end) / 2);

    if (arr[middle] === target) {
        return middle;
    } else if (arr[middle] > target) {
        return binarySearchRecursive(arr, target, start, middle - 1);
    } else {
        return binarySearchRecursive(arr, target, middle + 1, end);
    }
}
