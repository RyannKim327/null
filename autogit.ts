function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  // Ensure nums1 is the smaller array
  if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];

  const m = nums1.length;
  const n = nums2.length;
  let low = 0, high = m;

  while (low <= high) {
    const i = Math.floor((low + high) / 2);
    const j = Math.floor((m + n + 1) / 2) - i;

    const maxLeftX = i === 0 ? -Infinity : nums1[i - 1];
    const minRightX = i === m ? Infinity : nums1[i];
    const maxLeftY = j === 0 ? -Infinity : nums2[j - 1];
    const minRightY = j === n ? Infinity : nums2[j];

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      if ((m + n) % 2 === 0) {
        // Even total length
        return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
      } else {
        // Odd total length
        return Math.max(maxLeftX, maxLeftY);
      }
    } else if (maxLeftX > minRightY) {
      // Move towards the left in nums1
      high = i - 1;
    } else {
      // Move towards the right in nums1
      low = i + 1;
    }
  }

  throw new Error('Input arrays are not sorted or invalid.');
}
