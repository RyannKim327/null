function mergeSortIterative(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const n = arr.length;
  const result = [...arr];
  const buffer = new Array(n);

  for (let size = 1; size < n; size *= 2) {
    for (let leftStart = 0; leftStart < n; leftStart += 2*size) {
      const mid = Math.min(leftStart + size, n);
      const rightStart = Math.min(leftStart + 2*size, n);

      merge(result, buffer, leftStart, mid, rightStart);
    }

    // Swap the buffers
    const temp = result;
    result = buffer;
    buffer = temp;
  }

  return result;
}

function merge(arr, buffer, leftStart, mid, rightStart) {
  let left = leftStart;
  let right = mid;
  let index = leftStart;

  while (left < mid && right < rightStart) {
    if (arr[left] < arr[right]) {
      buffer[index++] = arr[left++];
    } else {
      buffer[index++] = arr[right++];
    }
  }

  while (left < mid) {
    buffer[index++] = arr[left++];
  }

  while (right < rightStart) {
    buffer[index++] = arr[right++];
  }
}

// Example
const arr = [38, 27, 43, 3, 9, 82, 10];
const sortedArr = mergeSortIterative(arr);
console.log(sortedArr);
