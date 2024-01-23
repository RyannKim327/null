function mergeSortIterative(arr) {
  const len = arr.length;
  const sorted = Array.from(arr);

  for (let width = 1; width < len; width *= 2) {
    for (let i = 0; i < len; i += width * 2) {
      const left = i;
      const middle = Math.min(i + width, len);
      const right = Math.min(i + width * 2, len);

      merge(sorted, left, middle, right);
    }
  }

  return sorted;
}

function merge(arr, left, middle, right) {
  const result = [];
  let i = left;
  let j = middle;

  while (i < middle && j < right) {
    if (arr[i] <= arr[j]) {
      result.push(arr[i++]);
    } else {
      result.push(arr[j++]);
    }
  }

  while (i < middle) {
    result.push(arr[i++]);
  }
  while (j < right) {
    result.push(arr[j++]);
  }

  for (let k = left; k < right; k++) {
    arr[k] = result[k - left];
  }
}
const arr = [5, 3, 8, 6, 2, 7, 1, 4];
const sortedArr = mergeSortIterative(arr);
console.log(sortedArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
