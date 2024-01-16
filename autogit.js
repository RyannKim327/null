function merge(leftArr, rightArr) {
  let mergedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Merge two sorted arrays into one
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      mergedArr.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      mergedArr.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  // Handle remaining elements (if any) in leftArr
  while (leftIndex < leftArr.length) {
    mergedArr.push(leftArr[leftIndex]);
    leftIndex++;
  }

  // Handle remaining elements (if any) in rightArr
  while (rightIndex < rightArr.length) {
    mergedArr.push(rightArr[rightIndex]);
    rightIndex++;
  }

  return mergedArr;
}
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // Array is already sorted
  }

  // Split the array into two halves
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  // Recursively sort and merge the subarrays
  const sortedLeftArr = mergeSort(leftArr);
  const sortedRightArr = mergeSort(rightArr);

  // Merge the sorted subarrays
  return merge(sortedLeftArr, sortedRightArr);
}
const array = [8, 3, 5, 4, 7, 9, 2, 1, 6];
const sortedArray = mergeSort(array);
console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
