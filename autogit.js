function findMedianSortedArrays(nums1, nums2) {
  const combined = nums1.concat(nums2).sort((a, b) => a - b);
  const length = combined.length;
  const mid1 = (length - 1) / 2;
  const mid2 = length / 2;

  if (length % 2 === 0) {
    return (combined[mid1] + combined[mid2]) / 2;
  } else {
    return combined[mid1];
  }
}
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
const median = findMedianSortedArrays(arr1, arr2);
console.log(median);  // Output: 3.5
