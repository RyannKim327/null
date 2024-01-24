function findMedianSortedArrays(nums1, nums2) {
  const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
  const length = mergedArray.length;

  if (length === 0) {
    return null; // No median if both arrays are empty
  }

  if (length % 2 === 1) {
    return mergedArray[Math.floor(length / 2)];
  } else {
    const midIndex1 = Math.floor(length / 2 - 1);
    const midIndex2 = Math.floor(length / 2);
    return (mergedArray[midIndex1] + mergedArray[midIndex2]) / 2;
  }
}

// Example usage:
const nums1 = [1, 3];
const nums2 = [2, 4];
const median = findMedianSortedArrays(nums1, nums2);
console.log(median); // Output: 2.5
