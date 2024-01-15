function findMedianSortedArrays(nums1, nums2) {
  const combined = nums1.concat(nums2);
  combined.sort((a, b) => a - b);

  const length = combined.length;
  const middle = Math.floor(length / 2);

  if (length % 2 === 0) {
    return (combined[middle - 1] + combined[middle]) / 2;
  } else {
    return combined[middle];
  }
}

// Example usage:
const nums1 = [1, 3];
const nums2 = [2, 4];
const median = findMedianSortedArrays(nums1, nums2);
console.log(median); // Output: 2.5
