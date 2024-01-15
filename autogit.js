function mergeSortIterative(array) {
  const arrayLength = array.length;
  let subarraySize = 1;

  while (subarraySize < arrayLength) {
    let index = 0;

    while (index < arrayLength - subarraySize) {
      const mid = index + subarraySize - 1;
      const end = Math.min(index + subarraySize * 2 - 1, arrayLength - 1);
      merge(array, index, mid, end);
      index += subarraySize * 2;
    }

    subarraySize *= 2;
  }

  return array;
}

function merge(array, startIndex, midIndex, endIndex) {
  const leftArray = array.slice(startIndex, midIndex + 1);
  const rightArray = array.slice(midIndex + 1, endIndex + 1);

  let leftIndex = 0;
  let rightIndex = 0;
  let mergeIndex = startIndex;

  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] <= rightArray[rightIndex]) {
      array[mergeIndex] = leftArray[leftIndex];
      leftIndex++;
    } else {
      array[mergeIndex] = rightArray[rightIndex];
      rightIndex++;
    }
    mergeIndex++;
  }

  while (leftIndex < leftArray.length) {
    array[mergeIndex] = leftArray[leftIndex];
    leftIndex++;
    mergeIndex++;
  }

  while (rightIndex < rightArray.length) {
    array[mergeIndex] = rightArray[rightIndex];
    rightIndex++;
    mergeIndex++;
  }
}
const array = [6, 2, 9, 5, 1, 0, 4, 8, 7, 3];
const sortedArray = mergeSortIterative(array);
console.log(sortedArray);
