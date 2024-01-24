function mergeSortIterative(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const length = arr.length;
  let sorted = [];

  for (let size = 1; size < length; size *= 2) {
    for (let leftStart = 0; leftStart < length; leftStart += 2 * size) {
      const mid = leftStart + size - 1;
      const rightEnd = Math.min(leftStart + 2 * size - 1, length - 1);
      merge(arr, leftStart, mid, rightEnd);
    }
  }

  return arr;
}

function merge(arr, leftStart, mid, rightEnd) {
  const leftEnd = mid;
  const rightStart = mid + 1;
  const size = rightEnd - leftStart + 1;

  let left = leftStart;
  let right = rightStart;
  let merged = [];

  while (left <= leftEnd && right <= rightEnd) {
    if (arr[left] <= arr[right]) {
      merged.push(arr[left]);
      left++;
    } else {
      merged.push(arr[right]);
      right++;
    }
  }

  while (left <= leftEnd) {
    merged.push(arr[left]);
    left++;
  }

  while (right <= rightEnd) {
    merged.push(arr[right]);
    right++;
  }

  for (let i = 0; i < size; i++) {
    arr[leftStart + i] = merged[i];
  }
}
const array = [5, 3, 8, 2, 1, 4];
console.log(mergeSortIterative(array)); // Output: [1, 2, 3, 4, 5, 8]
