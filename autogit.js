function findMedianSortedArrays(nums1, nums2) {
  const merged = mergeArrays(nums1, nums2);
  const n = merged.length;
  
  if (n % 2 === 0) {
    // Median for an even number of elements is the average of the middle two
    const middle = n / 2;
    return (merged[middle - 1] + merged[middle]) / 2;
  } else {
    // Median for an odd number of elements is the middle element
    return merged[Math.floor(n / 2)];
  }
}

function mergeArrays(nums1, nums2) {
  const merged = [];
  let i = 0;
  let j = 0;
  
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      merged.push(nums1[i]);
      i++;
    } else {
      merged.push(nums2[j]);
      j++;
    }
  }
  
  // Add remaining elements if there are any
  while (i < nums1.length) {
    merged.push(nums1[i]);
    i++;
  }
  
  while (j < nums2.length) {
    merged.push(nums2[j]);
    j++;
  }
  
  return merged;
}
const nums1 = [1, 3];
const nums2 = [2, 4, 6];

const median = findMedianSortedArrays(nums1, nums2);

console.log(median); // Output: 3.0
