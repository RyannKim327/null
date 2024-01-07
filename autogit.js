function findMedianSortedArrays(nums1, nums2) {
  const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
  const length = mergedArray.length;
  
  if (length % 2 !== 0) {
    return mergedArray[Math.floor(length / 2)];
  } else {
    const midIndex1 = length / 2 - 1;
    const midIndex2 = length / 2;
    return (mergedArray[midIndex1] + mergedArray[midIndex2]) / 2;
  }
}

// Example Usage:
const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6];
const median = findMedianSortedArrays(nums1, nums2);
console.log(median); // Output: 3.5
