function mergeSort(arr) {

}
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
}
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middleIndex = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middleIndex);
  const rightHalf = arr.slice(middleIndex);

  // Continue with merging the left and right halves
}
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middleIndex = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middleIndex);
  const rightHalf = arr.slice(middleIndex);

  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  // Continue with merging the sorted left and right halves
}
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middleIndex = Math.floor(arr.length / 2);
  const leftHalf = arr.slice(0, middleIndex);
  const rightHalf = arr.slice(middleIndex);

  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  return merge(sortedLeft, sortedRight);
}

function merge(leftArr, rightArr) {
  let sortedArr = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }

  // Concatenate the remaining elements from both arrays
  sortedArr = [...sortedArr, ...leftArr, ...rightArr];

  return sortedArr;
}
const array = [5, 3, 6, 1, 8, 2, 4, 7];
const sortedArray = mergeSort(array);
console.log(sortedArray);
