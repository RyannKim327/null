function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  if (nums1.length > nums2.length) {
    // Ensure nums1 is the smaller array
    return findMedianSortedArrays(nums2, nums1);
  }

  const m = nums1.length;
  const n = nums2.length;
  let low = 0, high = m;

  while (low <= high) {
    const partitionX = Math.floor((low + high) / 2);
    const partitionY = Math.floor((m + n + 1) / 2) - partitionX;

    const maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
    const minRightX = partitionX === m ? Infinity : nums1[partitionX];

    const maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
    const minRightY = partitionY === n ? Infinity : nums2[partitionY];

    // Check if we found the correct partition
    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      // If combined length is even
      if ((m + n) % 2 === 0) {
        return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
      } else {
        // If combined length is odd
        return Math.max(maxLeftX, maxLeftY);
      }
    } else if (maxLeftX > minRightY) {
      // We are too far on right side for partitionX, go left
      high = partitionX - 1;
    } else {
      // We are too far on left side for partitionX, go right
      low = partitionX + 1;
    }
  }

  throw new Error("Input arrays are not sorted properly.");
}
const arr1 = [1, 3, 8];
const arr2 = [7, 9, 10, 11];

console.log(findMedianSortedArrays(arr1, arr2)); // Output: 8
