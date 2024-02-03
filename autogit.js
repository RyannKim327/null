function findMedianSortedArrays(nums1, nums2) {
  const combinedArray = nums1.concat(nums2).sort((a, b) => a - b);
  const length = combinedArray.length;

  if (length % 2 !== 0) {
    // If the combined array length is odd
    return combinedArray[Math.floor(length / 2)];
  } else {
    // If the combined array length is even
    const mid = length / 2;
    return (combinedArray[mid - 1] + combinedArray[mid]) / 2;
  }
}

// Example usage
const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6];

console.log(findMedianSortedArrays(nums1, nums2)); // Output: 3.5
