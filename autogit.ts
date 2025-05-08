function binarySearch<T>(arr: T[], target: T, left = 0, right = arr.length - 1): number {
    if (left > right) return -1;  // Base case: target not found

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid;  // Target found
    } else if (arr[mid] > target) {
        return binarySearch(arr, target, left, mid - 1);  // Search left half
    } else {
        return binarySearch(arr, target, mid + 1, right);  // Search right half
    }
}
