function mergeSortIterative(arr) {
  const len = arr.length;
  const sortedArr = [...arr];

  for (let width = 1; width < len; width *= 2) {
    for (let i = 0; i < len; i += 2 * width) {
      const left = i;
      const mid = i + width;
      const right = i + 2 * width;

      merge(sortedArr, left, mid, right);
    }
  }

  return sortedArr;
}

function merge(arr, left, mid, right) {
  const leftArr = arr.slice(left, mid);
  const rightArr = arr.slice(mid, right);

  let i = 0; // pointer for left array
  let j = 0; // pointer for right array
  let k = left; // pointer for merged array

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }
    k++;
  }

  while (i < leftArr.length) {
    arr[k] = leftArr[i];
    i++;
    k++;
  }

  while (j < rightArr.length) {
    arr[k] = rightArr[j];
    j++;
    k++;
  }
}

// Example usage:
const array = [7, 2, 9, 1, 6, 5, 3, 8, 4];
const sortedArray = mergeSortIterative(array);
console.log(sortedArray);
