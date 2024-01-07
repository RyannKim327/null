function findMedianSortedArrays(nums1, nums2) {
  const mergedArray = nums1.concat(nums2);
  mergedArray.sort((a, b) => a - b);

  const length = mergedArray.length;
  const middle = Math.floor(length / 2);

  if (length % 2 === 0) {
    return (mergedArray[middle - 1] + mergedArray[middle]) / 2;
  } else {
    return mergedArray[middle];
  }
}

// Example usage:
const nums1 = [1, 3];
const nums2 = [2, 4];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.5
