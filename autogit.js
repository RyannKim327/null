function mergeSortIterative(array) {
  const length = array.length;
  let size = 1;

  while (size < length) {
    for (let i = 0; i < length - size; i += 2 * size) {
      const left = array.slice(i, i + size);
      const right = array.slice(i + size, i + 2 * size);

      array = merge(left, right, array, i);
    }

    size *= 2;
  }

  return array;
}

function merge(left, right, array, startIndex) {
  let leftIndex = 0,
    rightIndex = 0,
    arrayIndex = startIndex;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      array[arrayIndex] = left[leftIndex];
      leftIndex++;
    } else {
      array[arrayIndex] = right[rightIndex];
      rightIndex++;
    }
    arrayIndex++;
  }

  while (leftIndex < left.length) {
    array[arrayIndex] = left[leftIndex];
    leftIndex++;
    arrayIndex++;
  }

  while (rightIndex < right.length) {
    array[arrayIndex] = right[rightIndex];
    rightIndex++;
    arrayIndex++;
  }

  return array;
}
const array = [5, 3, 8, 4, 2, 1, 6, 9, 7];
const sortedArray = mergeSortIterative(array);
console.log(sortedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
