function iterativeMergeSort(arr: number[]): number[] {
  const result = arr.slice(); // clone to avoid mutating original
  const n = result.length;
  let width = 1;

  // Helper function to merge two sorted subarrays
  const merge = (leftStart: number, mid: number, rightEnd: number) => {
    const left = result.slice(leftStart, mid + 1);
    const right = result.slice(mid + 1, rightEnd + 1);
    let i = 0; // index for left array
    let j = 0; // index for right array
    let k = leftStart; // index for main array

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        result[k++] = left[i++];
      } else {
        result[k++] = right[j++];
      }
    }

    // copy remaining elements, if any
    while (i < left.length) {
      result[k++] = left[i++];
    }
    while (j < right.length) {
      result[k++] = right[j++];
    }
  };

  while (width < n) {
    let start = 0;
    while (start < n) {
      const mid = Math.min(start + width - 1, n - 1);
      const end = Math.min(start + 2 * width - 1, n - 1);
      if (mid < end) {
        merge(start, mid, end);
      }
      start += 2 * width;
    }
    width *= 2;
  }

  return result;
}
const array = [5, 2, 9, 1, 5, 6];
console.log(iterativeMergeSort(array));
