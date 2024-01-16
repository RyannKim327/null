function mergeArrays(arr1, arr2) {
  let i = 0, j = 0;
  const merged = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}
function findMedian(arr) {
  const length = arr.length;
  const mid = Math.floor(length / 2);

  if (length % 2 === 0) {
    return (arr[mid - 1] + arr[mid]) / 2;
  } else {
    return arr[mid];
  }
}
function findMedianOfSortedArrays(arr1, arr2) {
  const merged = mergeArrays(arr1, arr2);
  return findMedian(merged);
}
