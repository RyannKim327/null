function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Append remaining elements
  return result.concat(left.slice(i)).concat(right.slice(j));
}

function iterativeMergeSort(arr: number[]): number[] {
  const n = arr.length;
  let width = 1;
  let sortedArray = [...arr];

  while (width < n) {
    let tempArray: number[] = [];

    for (let i = 0; i < n; i += 2 * width) {
      const left = sortedArray.slice(i, i + width);
      const right = sortedArray.slice(i + width, i + 2 * width);
      tempArray = tempArray.concat(merge(left, right));
    }

    sortedArray = tempArray;
    width *= 2;
  }

  return sortedArray;
}
