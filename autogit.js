function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const len = arr.length;
  let size = 1;
  
  while (size < len) {
    let start = 0;

    while (start < len - size) {
      const mid = start + size - 1;
      const end = Math.min(start + 2 * size - 1, len - 1);
      merge(arr, start, mid, end);
      start += 2 * size;
    }

    size *= 2;
  }

  return arr;
}

function merge(arr, start, mid, end) {
  const left = arr.slice(start, mid + 1);
  const right = arr.slice(mid + 1, end + 1);
  let i = 0, j = 0, k = start;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }

  while (i < left.length) {
    arr[k] = left[i];
    i++;
    k++;
  }

  while (j < right.length) {
    arr[k] = right[j];
    j++;
    k++;
  }
}

// Example usage:
const arr = [9, 2, 7, 1, 5, 3, 4, 6, 8];
console.log(mergeSort(arr));
