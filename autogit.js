function merge(arr, temp, leftStart, leftEnd, rightStart, rightEnd) {
  let i = leftStart;
  let j = rightStart;
  let k = leftStart;

  while (i <= leftEnd && j <= rightEnd) {
    if (arr[i] <= arr[j]) {
      temp[k++] = arr[i++];
    } else {
      temp[k++] = arr[j++];
    }
  }

  while (i <= leftEnd) {
    temp[k++] = arr[i++];
  }

  while (j <= rightEnd) {
    temp[k++] = arr[j++];
  }

  for (i = leftStart; i <= rightEnd; i++) {
    arr[i] = temp[i];
  }
}
function mergeSortIterative(arr) {
  const size = arr.length;
  const temp = new Array(size);

  let blockSize = 1;

  while (blockSize < size) {
    let i = 0;

    while (i < size - blockSize) {
      const leftStart = i;
      const mid = i + blockSize;
      const leftEnd = mid - 1;
      const rightStart = mid;
      const rightEnd =
        i + 2 * blockSize - 1 < size - 1 ? i + 2 * blockSize - 1 : size - 1;

      merge(arr, temp, leftStart, leftEnd, rightStart, rightEnd);

      i += 2 * blockSize;
    }

    temp.forEach((value, index) => {
      arr[index] = value;
    });

    blockSize *= 2;
  }

  return arr;
}
const arr = [9, 3, 7, 5, 1, 6, 2, 8, 4];
const sortedArr = mergeSortIterative(arr);
console.log(sortedArr);
