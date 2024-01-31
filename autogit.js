function mergeSortIterative(array) {
  let sortedArray = array.slice();
  const len = sortedArray.length;
  let subArraySize = 1;

  function merge(left, mid, right, array) {
    const leftArray = array.slice(left, mid + 1);
    const rightArray = array.slice(mid + 1, right + 1);
    let leftIndex = 0;
    let rightIndex = 0;
    let sortedIndex = left;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
      if (leftArray[leftIndex] <= rightArray[rightIndex]) {
        array[sortedIndex] = leftArray[leftIndex];
        leftIndex++;
      } else {
        array[sortedIndex] = rightArray[rightIndex];
        rightIndex++;
      }
      sortedIndex++;
    }

    while (leftIndex < leftArray.length) {
      array[sortedIndex] = leftArray[leftIndex];
      leftIndex++;
      sortedIndex++;
    }

    while (rightIndex < rightArray.length) {
      array[sortedIndex] = rightArray[rightIndex];
      rightIndex++;
      sortedIndex++;
    }
  }

  while (subArraySize < len) {
    let left = 0;

    while (left + subArraySize < len) {
      let mid = left + subArraySize - 1;
      let right = Math.min(left + 2 * subArraySize - 1, len - 1);
      merge(left, mid, right, sortedArray);
      left += 2 * subArraySize;
    }

    subArraySize *= 2;
  }

  return sortedArray;
}
const array = [7, 2, 4, 1, 5, 3];
const sortedArray = mergeSortIterative(array);
console.log(sortedArray); // [1, 2, 3, 4, 5, 7]
