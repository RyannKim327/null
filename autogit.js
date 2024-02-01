function findMedianSortedArrays(nums1, nums2) {
  const merged = nums1.concat(nums2);
  const length = merged.length;

  if (length % 2 === 1) {
    return merged[Math.floor(length / 2)];
  } else {
    const midIndex = length / 2;
    return (merged[midIndex - 1] + merged[midIndex]) / 2;
  }
}
const nums1 = [1, 3, 5];
const nums2 = [2, 4];

const median = findMedianSortedArrays(nums1, nums2);
console.log(median);  // Output: 3
