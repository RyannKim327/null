function findMedianSortedArrays(nums1, nums2) {
  // Concatenate both arrays and sort them
  const combinedArray = [...nums1, ...nums2].sort((a, b) => a - b);

  const length = combinedArray.length;
  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    // Even number of elements, calculate average of two middle elements
    return (combinedArray[middleIndex - 1] + combinedArray[middleIndex]) / 2.0;
  } else {
    // Odd number of elements, return middle element
    return combinedArray[middleIndex];
  }
}

// Example usage:
const nums1 = [1, 3];
const nums2 = [2, 4, 5];

console.log(findMedianSortedArrays(nums1, nums2)); // Output: 3
