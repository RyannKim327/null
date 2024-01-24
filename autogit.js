function merge(leftArr, rightArr) {
  let resultArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      resultArr.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      resultArr.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  return resultArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middle);
  const rightArr = arr.slice(middle);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}
const unsortedArray = [7, 2, 5, 1, 8, 9, 3];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);
