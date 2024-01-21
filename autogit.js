function findMedianSortedArrays(nums1, nums2) {
  const combined = nums1.concat(nums2);
  combined.sort((a, b) => a - b);

  const middleIndex = Math.floor(combined.length / 2);
  if (combined.length % 2 === 0) {
    return (combined[middleIndex] + combined[middleIndex - 1]) / 2;
  }
  return combined[middleIndex];
}

// Example usage
const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6];
const median = findMedianSortedArrays(nums1, nums2);
console.log(median); // Output: 3.5
