function findMedianSortedArrays(nums1, nums2) {
  const combined = nums1.concat(nums2);
  combined.sort((a, b) => a - b);
  
  const mid = Math.floor(combined.length / 2);
  
  if (combined.length % 2 === 0) {
    return (combined[mid - 1] + combined[mid]) / 2;
  } else {
    return combined[mid];
  }
}

// Example usage:
const nums1 = [1, 3];
const nums2 = [2, 4];
const median = findMedianSortedArrays(nums1, nums2);
console.log(median); // Output: 2.5
