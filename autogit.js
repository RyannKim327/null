function findMedianSortedArrays(nums1, nums2) {
  const merged = [...nums1, ...nums2].sort((a, b) => a - b);
  const len = merged.length;
  const mid = Math.floor(len / 2);
  
  if (len % 2 === 0) {
    return (merged[mid - 1] + merged[mid]) / 2;
  } else {
    return merged[mid];
  }
}

// Example usage:
const nums1 = [1, 3];
const nums2 = [2, 4];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.5
