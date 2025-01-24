function mergeSort(arr: number[]): number[] {
  const len = arr.length;
  let width = 1;

  while (width < len) {
    let left = 0;

    while (left < len) {
      const mid = left + width;
      const right = Math.min(left + 2 * width, len);

      const leftArr = arr.slice(left, mid);
      const rightArr = arr.slice(mid, right);

      arr.splice(left, right - left, ...merge(leftArr, rightArr));

      left = left + 2 * width;
    }

    width = 2 * width;
  }

  return arr;
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}
const arr = [5, 2, 8, 3, 1, 4, 6];
console.log(mergeSort(arr)); // [1, 2, 3, 4, 5, 6, 8]
