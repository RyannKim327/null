function mergeSortIterative(array) {
  const n = array.length;
  let startSize = 1;

  while (startSize < n) {
    let i = 0;

    while (i < n - 1) {
      const middle = i + startSize - 1;
      const end = Math.min(i + 2 * startSize - 1, n - 1);

      const leftArray = array.slice(i, middle + 1);
      const rightArray = array.slice(middle + 1, end + 1);

      let leftIndex = 0;
      let rightIndex = 0;
      let mainIndex = i;

      while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
        if (leftArray[leftIndex] <= rightArray[rightIndex]) {
          array[mainIndex] = leftArray[leftIndex];
          leftIndex++;
        } else {
          array[mainIndex] = rightArray[rightIndex];
          rightIndex++;
        }

        mainIndex++;
      }

      while (leftIndex < leftArray.length) {
        array[mainIndex] = leftArray[leftIndex];
        leftIndex++;
        mainIndex++;
      }

      while (rightIndex < rightArray.length) {
        array[mainIndex] = rightArray[rightIndex];
        rightIndex++;
        mainIndex++;
      }

      i += 2 * startSize;
    }

    startSize *= 2;
  }

  return array;
}

// Example usage:
const arr = [5, 3, 8, 4, 2, 1, 6];
console.log(mergeSortIterative(arr));
