function findMedianSortedArrays(nums1, nums2) {
  // Merge the two sorted arrays
  const merged = [...nums1, ...nums2];

  // Sort the merged array
  merged.sort((a, b) => a - b);

  const length = merged.length;
  const middle = Math.floor(length / 2);

  if (length % 2 === 1) {
    // Return the value in the middle for odd length
    return merged[middle];
  } else {
    // Calculate the average for even length
    return (merged[middle - 1] + merged[middle]) / 2;
  }
}

// Example usage:
const nums1 = [1, 3];
const nums2 = [2, 4, 5];
const median = findMedianSortedArrays(nums1, nums2);
console.log(median);  // Output: 3
