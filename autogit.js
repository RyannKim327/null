function findMedianSortedArrays(nums1, nums2) {
  const combinedArray = nums1.concat(nums2).sort((a, b) => a - b);
  const length = combinedArray.length;

  if (length % 2 === 0) {
    const midIndex1 = length / 2;
    const midIndex2 = midIndex1 - 1;
    return (combinedArray[midIndex1] + combinedArray[midIndex2]) / 2;
  } else {
    const midIndex = Math.floor(length / 2);
    return combinedArray[midIndex];
  }
}

// Example usage
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
console.log(findMedianSortedArrays(arr1, arr2)); // Output: 3.5
