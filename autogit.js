function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const aux = Array.from(arr);
  const n = arr.length;

  for (let size = 1; size < n; size *= 2) {
    for (let lo = 0; lo < n - size; lo += size * 2) {
      const mid = lo + size - 1;
      const hi = Math.min(lo + size * 2 - 1, n - 1);
      merge(arr, aux, lo, mid, hi);
    }
  }

  return arr;
}

function merge(arr, aux, lo, mid, hi) {
  for (let k = lo; k <= hi; k++) {
    aux[k] = arr[k];
  }

  let i = lo;
  let j = mid + 1;

  for (let k = lo; k <= hi; k++) {
    if (i > mid) {
      arr[k] = aux[j++];
    } else if (j > hi) {
      arr[k] = aux[i++];
    } else if (aux[j] < aux[i]) {
      arr[k] = aux[j++];
    } else {
      arr[k] = aux[i++];
    }
  }
}

// Example usage
const arr = [5, 3, 8, 4, 2, 1];
const sortedArr = mergeSort(arr);
console.log(sortedArr);  // [1, 2, 3, 4, 5, 8]
