function findMedianSortedArrays(nums1, nums2) {
  const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
  const length = mergedArray.length;
  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    // Even length case
    const median1 = mergedArray[middleIndex - 1];
    const median2 = mergedArray[middleIndex];
    return (median1 + median2) / 2;
  } else {
    // Odd length case
    return mergedArray[middleIndex];
  }
}

// Example usage
const nums1 = [1, 3];
const nums2 = [2, 4, 5];
const median = findMedianSortedArrays(nums1, nums2);
console.log(median); // Output: 3
