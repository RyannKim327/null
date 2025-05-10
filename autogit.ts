function binarySearchRecursive(arr: number[], target: number, left = 0, right = arr.length - 1): number {
  if (left > right) {
    return -1; // target not found
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return binarySearchRecursive(arr, target, left, mid - 1);
  } else {
    return binarySearchRecursive(arr, target, mid + 1, right);
  }
}
