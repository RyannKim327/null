function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const merged: number[] = [];
  let i = 0, j = 0;
  
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      merged.push(nums1[i]);
      i++;
    } else {
      merged.push(nums2[j]);
      j++;
    }
  }
  
  while (i < nums1.length) {
    merged.push(nums1[i]);
    i++;
  }
  
  while (j < nums2.length) {
    merged.push(nums2[j]);
    j++;
  }
  
  const mid = Math.floor(merged.length / 2);
  if (merged.length % 2 === 0) {
    return (merged[mid - 1] + merged[mid]) / 2;
  } else {
    return merged[mid];
  }
}
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const m = nums1.length;
  const n = nums2.length;
  let low = 0, high = m;

  while (low <= high) {
    const partitionX = Math.floor((low + high) / 2);
    const partitionY = Math.floor((m + n + 1) / 2) - partitionX;

    const maxLeftX = partitionX === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
    const minRightX = partitionX === m ? Number.POSITIVE_INFINITY : nums1[partitionX];

    const maxLeftY = partitionY === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
    const minRightY = partitionY === n ? Number.POSITIVE_INFINITY : nums2[partitionY];

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      // Found the correct partition
      if ((m + n) % 2 === 0) {
        return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
      } else {
        return Math.max(maxLeftX, maxLeftY);
      }
    } else if (maxLeftX > minRightY) {
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }

  throw new Error("Input arrays are not sorted or valid");
}
const arr1 = [1, 3, 8];
const arr2 = [7, 9, 10, 11];

console.log(findMedianSortedArrays(arr1, arr2)); // Output: 8
