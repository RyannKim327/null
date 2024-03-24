function mergeSortIterative(array) {
  const n = array.length;
  const sortedArray = array.slice(); // Make a copy of the input array

  for (let size = 1; size < n; size *= 2) {
    for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * size) {
      const mid = Math.min(leftStart + size - 1, n - 1);
      const rightEnd = Math.min(leftStart + 2 * size - 1, n - 1);
      merge(sortedArray, leftStart, mid, rightEnd);
    }
  }

  return sortedArray;
}

function merge(array, leftStart, mid, rightEnd) {
  const tempArray = [];
  let left = leftStart;
  let right = mid + 1;

  while (left <= mid && right <= rightEnd) {
    if (array[left] < array[right]) {
      tempArray.push(array[left]);
      left++;
    } else {
      tempArray.push(array[right]);
      right++;
    }
  }

  while (left <= mid) {
    tempArray.push(array[left]);
    left++;
  }

  while (right <= rightEnd) {
    tempArray.push(array[right]);
    right++;
  }

  for (let i = 0; i < tempArray.length; i++) {
    array[leftStart + i] = tempArray[i];
  }
}

// Usage
const unsortedArray = [7, 2, 4, 1, 5, 3];
const sortedArray = mergeSortIterative(unsortedArray);
console.log(sortedArray);
