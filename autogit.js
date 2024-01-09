function findMedianSortedArrays(nums1, nums2) {
  // Merge the two sorted arrays
  const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);

  const length = mergedArray.length;
  const middleIndex = Math.floor(length / 2);

  // Check if the length is odd
  if (length % 2 === 1) {
    return mergedArray[middleIndex];
  } else {
    // Calculate the average of the middle two elements
    return (mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2;
  }
}

// Example usage
const nums1 = [1, 3];
const nums2 = [2, 4];
const median = findMedianSortedArrays(nums1, nums2);
console.log(median); // Output: 2.5
