function findMedianSortedArrays(nums1, nums2) {
  const combinedArray = nums1.concat(nums2).sort((a, b) => a - b);
  const length = combinedArray.length;

  if (length % 2 === 1) {
    return combinedArray[Math.floor(length / 2)];
  } else {
    const middle1 = combinedArray[Math.floor(length / 2) - 1];
    const middle2 = combinedArray[Math.floor(length / 2)];
    return (middle1 + middle2) / 2;
  }
}

// Example usage:
const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 3.5
