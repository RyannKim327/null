function findMedianSortedArrays(nums1, nums2) {
  // Merge the two sorted arrays
  const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);

  const length = mergedArray.length;

  // Determine if the length is even or odd
  if (length % 2 !== 0) {
    // Length is odd, return middle element
    return mergedArray[Math.floor(length / 2)];
  } else {
    // Length is even, return average of middle elements
    const midIndex1 = length / 2 - 1;
    const midIndex2 = length / 2;
    return (mergedArray[midIndex1] + mergedArray[midIndex2]) / 2;
  }
}

// Example usage
const nums1 = [1, 3];
const nums2 = [2, 4];
const median = findMedianSortedArrays(nums1, nums2);
console.log(median); // Output: 2.5
