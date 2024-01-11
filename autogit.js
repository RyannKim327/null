function binarySearch(arr, target, start, end) {
  if (start > end)
    return -1;

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target)
    return mid;
  else if (arr[mid] > target)
    return binarySearch(arr, target, start, mid - 1);
  else
    return binarySearch(arr, target, mid + 1, end);
}

// Example usage:
const array = [1, 4, 7, 12, 18, 23, 29, 37, 42, 50];
const targetElement = 18;

const index = binarySearch(array, targetElement, 0, array.length - 1);
console.log('Target element found at index:', index);
