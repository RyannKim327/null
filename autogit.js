function findMedianSortedArrays(nums1, nums2) {
  const combined = [...nums1, ...nums2];
  combined.sort((a, b) => a - b);

  const middle = Math.floor(combined.length / 2);
  if (combined.length % 2 === 0) {
    return (combined[middle - 1] + combined[middle]) / 2;
  } else {
    return combined[middle];
  }
}
const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6];
const median = findMedianSortedArrays(nums1, nums2);
console.log(median);  // Output: 3.5
