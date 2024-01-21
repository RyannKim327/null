function mergeSortIterative(arr) {
  const n = arr.length;
  const sortedArr = [...arr];

  for (let size = 1; size < n; size *= 2) {
    for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * size) {
      const mid = Math.min(leftStart + size - 1, n - 1);
      const rightEnd = Math.min(leftStart + 2 * size - 1, n - 1);

      merge(sortedArr, leftStart, mid, rightEnd);
    }
  }
  return sortedArr;
}

function merge(arr, leftStart, mid, rightEnd) {
  const leftEnd = mid;
  const rightStart = mid + 1;

  let leftPtr = leftStart;
  let rightPtr = rightStart;
  let sortedPtr = leftStart;

  const tempArr = Array.from(arr); // create a temporary array to store merged values

  while (leftPtr <= leftEnd && rightPtr <= rightEnd) {
    if (tempArr[leftPtr] <= tempArr[rightPtr]) {
      arr[sortedPtr++] = tempArr[leftPtr++];
    } else {
      arr[sortedPtr++] = tempArr[rightPtr++];
    }
  }

  // Copy the remaining elements from the left side
  while (leftPtr <= leftEnd) {
    arr[sortedPtr++] = tempArr[leftPtr++];
  }

  // Copy the remaining elements from the right side
  while (rightPtr <= rightEnd) {
    arr[sortedPtr++] = tempArr[rightPtr++];
  }
}

// Example usage:
const arr = [8, 4, 2, 9, 1, 7, 5, 3];
const sortedArr = mergeSortIterative(arr);
console.log(sortedArr);
