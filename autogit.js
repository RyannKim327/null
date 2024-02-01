function findMedianSortedArrays(nums1, nums2) {
  const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
  const length = mergedArray.length;
  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 1) {
    return mergedArray[middleIndex];
  } else {
    return (mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2;
  }
}

// Example usage:
const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6];
const median = findMedianSortedArrays(nums1, nums2);
console.log(median); // Output: 3.5
