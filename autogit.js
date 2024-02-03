function mergeSortIterative(arr) {
  const len = arr.length;
  const sortedArr = arr.slice(); // Copy the original array to avoid modifying it
  
  for (let width = 1; width < len; width *= 2) {
    for (let i = 0; i < len; i += 2 * width) {
      const left = i;
      const mid = Math.min(i + width, len);
      const right = Math.min(i + 2 * width, len);
      merge(sortedArr, left, mid, right);
    }
  }
  
  return sortedArr;
}

function merge(arr, left, mid, right) {
  const leftArr = arr.slice(left, mid);
  const rightArr = arr.slice(mid, right);

  let i = 0;
  let j = 0;
  let k = left;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k++] = leftArr[i++];
    } else {
      arr[k++] = rightArr[j++];
    }
  }

  while (i < leftArr.length) {
    arr[k++] = leftArr[i++];
  }

  while (j < rightArr.length) {
    arr[k++] = rightArr[j++];
  }
}
const array = [9, 2, 7, 12, 3, 6, 8, 1];
const sortedArray = mergeSortIterative(array);
console.log(sortedArray);
