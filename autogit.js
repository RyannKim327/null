function findMedianSortedArrays(nums1, nums2) {
  // Merge the two arrays
  let merged = [];
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
  
  // Calculate the median
  let length = merged.length;
  if (length % 2 === 0) {
    return (merged[length / 2 - 1] + merged[length / 2]) / 2;
  } else {
    return merged[Math.floor(length / 2)];
  }
}

// Test the function
let nums1 = [1, 3];
let nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2

nums1 = [1, 2];
nums2 = [3, 4];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.5
