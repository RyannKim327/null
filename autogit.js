function findMedianSortedArrays(nums1, nums2) {
  // Merge the two arrays
  const merged = [...nums1, ...nums2].sort((a, b) => a - b);

  // Determine the middle index and length of the merged array
  const middleIndex = Math.floor(merged.length / 2);
  const isEvenLength = merged.length % 2 === 0;

  if (isEvenLength) {
    // If the merged array has an even length, return the average
    // of the two middle elements
    return (merged[middleIndex - 1] + merged[middleIndex]) / 2;
  } else {
    // If the merged array has an odd length, return the middle element
    return merged[middleIndex];
  }
}

// Example usage:
const nums1 = [1, 3];
const nums2 = [2, 4];

console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.5
