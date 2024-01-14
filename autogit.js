function merge(leftArr, rightArr) {
  let mergedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare and merge elements from both arrays
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      mergedArr.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      mergedArr.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  // Add remaining elements from leftArr (if any)
  while (leftIndex < leftArr.length) {
    mergedArr.push(leftArr[leftIndex]);
    leftIndex++;
  }

  // Add remaining elements from rightArr (if any)
  while (rightIndex < rightArr.length) {
    mergedArr.push(rightArr[rightIndex]);
    rightIndex++;
  }

  return mergedArr;
}
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // base case: array is already sorted
  }

  const middleIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middleIndex);
  const rightArr = arr.slice(middleIndex);

  const sortedLeftArr = mergeSort(leftArr);
  const sortedRightArr = mergeSort(rightArr);

  return merge(sortedLeftArr, sortedRightArr);
}
const arr = [5, 2, 6, 1, 3, 9, 4];
const sortedArr = mergeSort(arr);
console.log(sortedArr);
