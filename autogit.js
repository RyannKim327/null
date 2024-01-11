function findMedianSortedArrays(nums1, nums2) {
  const merged = [...nums1, ...nums2];
  merged.sort((a, b) => a - b);

  const middleIndex = Math.floor(merged.length / 2);

  if (merged.length % 2 === 0) {
    const median = (merged[middleIndex] + merged[middleIndex - 1]) / 2;
    return median;
  } else {
    return merged[middleIndex];
  }
}

// Example usage:
const nums1 = [1, 3]; // First sorted array
const nums2 = [2, 4]; // Second sorted array

const median = findMedianSortedArrays(nums1, nums2);
console.log(median); // Output: 2.5
