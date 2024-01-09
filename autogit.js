function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // returns the array if it has only one element or is empty
  }

  const midIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, midIndex);
  const rightArr = arr.slice(midIndex);

  const sortedLeftArr = mergeSort(leftArr);
  const sortedRightArr = mergeSort(rightArr);

  return merge(sortedLeftArr, sortedRightArr);
}

function merge(leftArr, rightArr) {
  const sortedArr = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }

  // If any elements are remaining in the left array, add them to the sorted array
  while (leftArr.length) {
    sortedArr.push(leftArr.shift());
  }

  // If any elements are remaining in the right array, add them to the sorted array
  while (rightArr.length) {
    sortedArr.push(rightArr.shift());
  }

  return sortedArr;
}

// Example usage:
const arr = [5, 2, 9, 1, 7, 6, 4, 3, 8];
const sortedArr = mergeSort(arr);
console.log(sortedArr);
