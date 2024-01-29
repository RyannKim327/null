const mergeArrays = (arr1, arr2) => {
  let merged = arr1.concat(arr2);
  return merged.sort((a, b) => a - b);
};
const findMedian = (arr) => {
  const mid = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return (arr[mid - 1] + arr[mid]) / 2;
  } else {
    return arr[mid];
  }
};
const findMedianOfArrays = (arr1, arr2) => {
  const merged = mergeArrays(arr1, arr2);
  return findMedian(merged);
};
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
const median = findMedianOfArrays(arr1, arr2);
console.log(median); // Output: 3.5
