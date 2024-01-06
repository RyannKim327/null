function merge(leftArr, rightArr) {
  let resultArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Merge the arrays until one of them is exhausted
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      resultArr.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      resultArr.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  // Append the remaining elements (if any) of leftArr
  while (leftIndex < leftArr.length) {
    resultArr.push(leftArr[leftIndex]);
    leftIndex++;
  }

  // Append the remaining elements (if any) of rightArr
  while (rightIndex < rightArr.length) {
    resultArr.push(rightArr[rightIndex]);
    rightIndex++;
  }

  return resultArr;
}
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // Split the array into two halves
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  // Recursively sort the two halves
  const sortedLeftArr = mergeSort(leftArr);
  const sortedRightArr = mergeSort(rightArr);

  // Merge the sorted halves using the merge function
  return merge(sortedLeftArr, sortedRightArr);
}
const arr = [5, 3, 8, 4, 2, 1, 9, 7, 6];
console.log(mergeSort(arr));
