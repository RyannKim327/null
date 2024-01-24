function findMedianSortedArrays(nums1, nums2) {
  let combinedArray = nums1.concat(nums2);
  combinedArray.sort((a, b) => a - b);

  const length = combinedArray.length;
  const mid = Math.floor(length / 2);

  if (length % 2 === 0) {
    return (combinedArray[mid - 1] + combinedArray[mid]) / 2;
  } else {
    return combinedArray[mid];
  }
}

// Example usage:
const nums1 = [1, 3];
const nums2 = [2, 4];
const median = findMedianSortedArrays(nums1, nums2);
console.log(median); // Output: 2.5
