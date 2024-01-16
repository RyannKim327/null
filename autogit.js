function findMedianSortedArrays(nums1, nums2) {
  const merged = [...nums1, ...nums2].sort((a, b) => a - b);
  const length = merged.length;
  const mid = Math.floor(length / 2);

  if (length % 2 === 0) {
    return (merged[mid - 1] + merged[mid]) / 2;
  } else {
    return merged[mid];
  }
}

// Example usage:
const nums1 = [1, 3];
const nums2 = [2, 4];

const median = findMedianSortedArrays(nums1, nums2);
console.log(median); // Output: 2.5
