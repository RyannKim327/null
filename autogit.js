const mergeArrays = (arr1, arr2) => {
  let mergedArray = [];
  let i = 0, j = 0;

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
};
const findMedianSortedArrays = (nums1, nums2) => {
  const mergedArray = mergeArrays(nums1, nums2);
  const length = mergedArray.length;
  const middleIndex = Math.floor(length / 2);

  // Check if the length is odd
  if (length % 2 !== 0) {
    return mergedArray[middleIndex];
  }

  // If the length is even, calculate the average of the middle two elements
  return (mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2;
};
const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6];
const median = findMedianSortedArrays(nums1, nums2);
console.log(median); // Output: 3.5
