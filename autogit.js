function findMedianSortedArrays(nums1, nums2) {
  // Concatenate the arrays
  let merged = nums1.concat(nums2);

  // Sort the merged array
  merged.sort((a, b) => a - b);

  // Find the median
  const length = merged.length;
  const mid = Math.floor(length / 2);

  if (length % 2 === 0) {
    // Even length
    return (merged[mid - 1] + merged[mid]) / 2;
  } else {
    // Odd length
    return merged[mid];
  }
}

// Example usage:
const nums1 = [1, 3]; // First sorted array
const nums2 = [2, 4]; // Second sorted array

console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.5
