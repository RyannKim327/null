function mergeArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}
function findMedian(arr1, arr2) {
  const mergedArray = mergeArrays(arr1, arr2);
  const length = mergedArray.length;
  
  if (length % 2 === 1) {
    return mergedArray[Math.floor(length / 2)];
  } else {
    const mid = length / 2;
    return (mergedArray[mid] + mergedArray[mid - 1]) / 2;
  }
}
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6, 8];
const median = findMedian(arr1, arr2);
console.log(median); // Output: 4
