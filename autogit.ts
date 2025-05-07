function merge(left: number[], right: number[]): number[] {
  const merged: number[] = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }

  // Append remaining elements
  while (i < left.length) {
    merged.push(left[i]);
    i++;
  }

  while (j < right.length) {
    merged.push(right[j]);
    j++;
  }

  return merged;
}

function iterativeMergeSort(arr: number[]): number[] {
  let width = 1;
  const n = arr.length;
  let result = [...arr];

  while (width < n) {
    let i = 0;

    while (i < n) {
      const left = i;
      const mid = Math.min(i + width, n);
      const right = Math.min(i + 2 * width, n);

      const merged = merge(result.slice(left, mid), result.slice(mid, right));

      // Put merged array back into result
      for (let k = 0; k < merged.length; k++) {
        result[left + k] = merged[k];
      }

      i += 2 * width;
    }

    width *= 2;
  }

  return result;
}

// Example usage:
const arr = [38, 27, 43, 3, 9, 82, 10];
const sorted = iterativeMergeSort(arr);
console.log(sorted); // [3, 9, 10, 27, 38, 43, 82]
