function findMedianSortedArrays(nums1, nums2) {
  const combined = nums1.concat(nums2);
  combined.sort((a, b) => a - b);

  const length = combined.length;
  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 1) {
    return combined[middleIndex];
  } else {
    return (combined[middleIndex - 1] + combined[middleIndex]) / 2;
  }
}

// Example usage:
const nums1 = [1, 3];
const nums2 = [2, 4, 5];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 3
