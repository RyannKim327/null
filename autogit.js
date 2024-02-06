function mergeSortIterative(arr) {
  const tempArray = [...arr];
  const mergedArray = [];
  let subarraySize = 1;

  while (subarraySize < arr.length) {
    let i = 0;

    while (i < arr.length - subarraySize) {
      const leftStart = i;
      const rightStart = leftStart + subarraySize;
      const leftEnd = Math.min(leftStart + subarraySize - 1, arr.length - 1);
      const rightEnd = Math.min(rightStart + subarraySize - 1, arr.length - 1);

      let leftIndex = leftStart;
      let rightIndex = rightStart;

      while (leftIndex <= leftEnd && rightIndex <= rightEnd) {
        if (tempArray[leftIndex] <= tempArray[rightIndex]) {
          mergedArray.push(tempArray[leftIndex]);
          leftIndex++;
        } else {
          mergedArray.push(tempArray[rightIndex]);
          rightIndex++;
        }
      }

      for (let j = leftIndex; j <= leftEnd; j++) {
        mergedArray.push(tempArray[j]);
      }

      for (let j = rightIndex; j <= rightEnd; j++) {
        mergedArray.push(tempArray[j]);
      }

      i += subarraySize * 2;
    }

    for (let j = 0; j < mergedArray.length; j++) {
      tempArray[j] = mergedArray[j];
    }

    subarraySize *= 2;
    mergedArray.length = 0;
  }

  return tempArray;
}

// Example usage:
const arr = [9, 3, 7, 5, 1, 8, 4, 2, 6];
const sortedArr = mergeSortIterative(arr);
console.log(sortedArr);
