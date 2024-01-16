function merge(subarray1, subarray2) {
  let mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < subarray1.length && j < subarray2.length) {
    if (subarray1[i] <= subarray2[j]) {
      mergedArray.push(subarray1[i]);
      i++;
    } else {
      mergedArray.push(subarray2[j]);
      j++;
    }
  }

  while (i < subarray1.length) {
    mergedArray.push(subarray1[i]);
    i++;
  }

  while (j < subarray2.length) {
    mergedArray.push(subarray2[j]);
    j++;
  }

  return mergedArray;
}
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, mid);
  const rightHalf = array.slice(mid);

  const sortedLeftHalf = mergeSort(leftHalf);
  const sortedRightHalf = mergeSort(rightHalf);

  return merge(sortedLeftHalf, sortedRightHalf);
}
const array = [5, 2, 9, 1, 7, 6, 4, 3, 8];
const sortedArray = mergeSort(array);
console.log(sortedArray);  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
