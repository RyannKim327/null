function mergeSortIterative(array) {
  const len = array.length;
  let chunkSize = 1;

  while (chunkSize < len) {
    for (let start = 0; start < len; start += chunkSize * 2) {
      const left = array.slice(start, start + chunkSize);
      const right = array.slice(start + chunkSize, start + chunkSize * 2);
      const merged = merge(left, right);
    
      for (let i = 0; i < merged.length; i++) {
        array[start + i] = merged[i];
      }
    }
    chunkSize *= 2;
  }

  return array;
}

function merge(left, right) {
  const merged = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      merged.push(left[leftIndex++]);
    } else {
      merged.push(right[rightIndex++]);
    }
  }

  return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
const arr = [5, 2, 8, 3, 9, 1];
console.log(mergeSortIterative(arr)); // Output: [1, 2, 3, 5, 8, 9]
