function mergeSort(arr) {
  const n = arr.length;
  const temp = new Array(n);
  let current_size;

  for (current_size = 1; current_size < n; current_size *= 2) {
    for (let left = 0; left < n - 1; left += 2 * current_size) {
      const mid = Math.min(left + current_size - 1, n - 1);
      const right = Math.min(left + 2 * current_size - 1, n - 1);

      merge(arr, temp, left, mid, right);
    }
  }

  return arr;
}

function merge(arr, temp, left, mid, right) {
  let i = left;
  let j = mid + 1;
  let k = left;

  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) {
      temp[k] = arr[i];
      i++;
    } else {
      temp[k] = arr[j];
      j++;
    }
    k++;
  }

  while (i <= mid) {
    temp[k] = arr[i];
    i++;
    k++;
  }

  while (j <= right) {
    temp[k] = arr[j];
    j++;
    k++;
  }

  for (let p = left; p <= right; p++) {
    arr[p] = temp[p];
  }
}
const arr = [5, 1, 4, 2, 8];
console.log(mergeSort(arr)); // Output: [1, 2, 4, 5, 8]
