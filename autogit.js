const findMedianSortedArrays = (nums1, nums2) => {
  const merged = merge(nums1, nums2);
  const length = merged.length;
  
  if (length % 2 === 1) {
    return merged[Math.floor(length / 2)];
  } else {
    const midIndex = length / 2;
    return (merged[midIndex - 1] + merged[midIndex]) / 2;
  }
};

const merge = (nums1, nums2) => {
  let merged = [];
  let i = 0;
  let j = 0;
  
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
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
  
  return merged;
};

// Example usage:
const nums1 = [1, 3];
const nums2 = [2, 4];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.5
