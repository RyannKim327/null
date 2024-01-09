function findMedianSortedArrays(nums1, nums2) {
  // Concatenate the two arrays into a single sorted array
  const combinedArray = [...nums1, ...nums2].sort((a, b) => a - b);

  // Determine the length of the combined array
  const length = combinedArray.length;

  // Find the middle index of the combined array
  const middleIndex = Math.floor(length / 2);

  // Calculate the median based on the length of the combined array
  if (length % 2 === 0) {
    // Even length, so median is the average of the middle two elements
    return (combinedArray[middleIndex - 1] + combinedArray[middleIndex]) / 2;
  } else {
    // Odd length, so median is the middle element
    return combinedArray[middleIndex];
  }
}

// Example usage
const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6];

const median = findMedianSortedArrays(nums1, nums2);
console.log(median); // Output: 3.5
