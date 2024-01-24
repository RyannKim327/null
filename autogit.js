function mergeSortIterative(arr) {
  const size = arr.length;
  let temp = arr.map(value => [value]);
  let mergeSize = 1;

  while (mergeSize < size) {
    let i = 0;
    while (i < size - mergeSize) {
      const left = temp[i];
      const right = temp[i + mergeSize];
      const end = temp[i + 2 * mergeSize] || [];

      temp[i] = merge(left, right, end);
      i += 2 * mergeSize;
    }
    mergeSize *= 2;
  }

  return temp[0];
}

function merge(left, right, end) {
  let i = 0;
  let j = 0;
  const merged = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }

  return merged.concat(left.slice(i)).concat(right.slice(j)).concat(end);
}
const arr = [8, 4, 2, 9, 1, 5, 7, 3, 6];
const sortedArray = mergeSortIterative(arr);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
