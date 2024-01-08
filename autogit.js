function mergeSortIterative(array) {
  const arrayLength = array.length;
  let subarraySize = 1;

  while (subarraySize < arrayLength) {
    let left = 0;

    while (left + subarraySize < arrayLength) {
      const middle = left + subarraySize - 1;
      const right = Math.min(left + subarraySize * 2 - 1, arrayLength - 1);

      merge(array, left, middle, right);

      left += subarraySize * 2;
    }

    subarraySize *= 2;
  }

  return array;
}

function merge(array, left, middle, right) {
  const leftArray = array.slice(left, middle + 1);
  const rightArray = array.slice(middle + 1, right + 1);
  let i = 0;
  let j = 0;
  let k = left;

  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] <= rightArray[j]) {
      array[k] = leftArray[i];
      i++;
    } else {
      array[k] = rightArray[j];
      j++;
    }
    k++;
  }

  while (i < leftArray.length) {
    array[k] = leftArray[i];
    i++;
    k++;
  }

  while (j < rightArray.length) {
    array[k] = rightArray[j];
    j++;
    k++;
  }
}
const arr = [9, 5, 1, 3, 6, 2, 8, 4, 7];
console.log(mergeSortIterative(arr)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
