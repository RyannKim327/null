function merge(left, right) {
  const array = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      array.push(left.shift());
    } else {
      array.push(right.shift());
    }
  }
  return [...array, ...left, ...right];
}

function mergeSortIterative(array) {
  const n = array.length;
  let subArraySize = 1;
  while (subArraySize < n) {
    let start = 0;
    while (start < n - 1) {
      const mid = Math.min(start + subArraySize - 1, n - 1);
      const end = Math.min(start + 2 * subArraySize - 1, n - 1);
      const left = array.slice(start, mid + 1);
      const right = array.slice(mid + 1, end + 1);
      const mergedArray = merge(left, right);
      array.splice(start, mergedArray.length, ...mergedArray);
      start += 2 * subArraySize;
    }
    subArraySize *= 2;
  }
  return array;
}

// Example usage:
const array = [7, 2, 6, 3, 8, 1, 5, 4];
const sortedArray = mergeSortIterative(array);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
