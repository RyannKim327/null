function findMedianSortedArrays(nums1, nums2) {
  const merged = [];
  let p1 = 0, p2 = 0;

  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] < nums2[p2]) {
      merged.push(nums1[p1]);
      p1++;
    } else {
      merged.push(nums2[p2]);
      p2++;
    }
  }

  // Add remaining elements from nums1, if any
  while (p1 < nums1.length) {
    merged.push(nums1[p1]);
    p1++;
  }

  // Add remaining elements from nums2, if any
  while (p2 < nums2.length) {
    merged.push(nums2[p2]);
    p2++;
  }

  const length = merged.length;
  const mid = Math.floor(length / 2);

  return length % 2 === 0 ? (merged[mid - 1] + merged[mid]) / 2 : merged[mid];
}

// Example usage:
const nums1 = [1, 3];
const nums2 = [2, 4];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.5
