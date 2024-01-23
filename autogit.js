function findMedianSortedArrays(nums1, nums2) {
  const combinedArray = nums1.concat(nums2);

  combinedArray.sort((a, b) => a - b);

  const midIndex = Math.floor(combinedArray.length / 2);

  if (combinedArray.length % 2 === 0) {
    // Even length, return average of two middle values
    return (combinedArray[midIndex - 1] + combinedArray[midIndex]) / 2;
  } else {
    // Odd length, return middle value
    return combinedArray[midIndex];
  }
}

// Example usage:
const nums1 = [1, 3];
const nums2 = [2, 4, 5];

const median = findMedianSortedArrays(nums1, nums2);
console.log(median); // Output: 3
