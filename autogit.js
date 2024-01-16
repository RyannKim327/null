function findMedianSortedArrays(nums1, nums2) {
  // Step 1: Concatenate the arrays and sort them
  const combined = nums1.concat(nums2).sort((a, b) => a - b);

  // Step 2: Calculate the length of the combined array
  const length = combined.length;

  // Step 3: Determine if the length is odd or even
  if (length % 2 === 1) {
    // Step 4: Length is odd, return the middle element
    return combined[Math.floor(length / 2)];
  } else {
    // Step 5: Length is even, return the average of the middle two elements
    const mid = length / 2;
    return (combined[mid - 1] + combined[mid]) / 2;
  }
}

// Example usage
const nums1 = [1, 3];
const nums2 = [2, 4];

console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.5
