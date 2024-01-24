function findMedianSortedArrays(nums1, nums2) {
  const merged = [...nums1, ...nums2].sort((a, b) => a - b);
  const length = merged.length;
  
  if (length % 2 === 0) {
    const midIndex1 = length / 2 - 1;
    const midIndex2 = length / 2;
    return (merged[midIndex1] + merged[midIndex2]) / 2;
  } else {
    const midIndex = Math.floor(length / 2);
    return merged[midIndex];
  }
}

// Example usage:
const nums1 = [1, 3];
const nums2 = [2, 4];
const median = findMedianSortedArrays(nums1, nums2);
console.log(median); // Output: 2.5
