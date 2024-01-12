function findMedianSortedArrays(nums1, nums2) {
  const mergedArray = mergeSortedArrays(nums1, nums2);
  const length = mergedArray.length;
  
  if (length % 2 === 0) {
    const mid = length / 2;
    const median = (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    return median;
  } else {
    const mid = Math.floor(length / 2);
    return mergedArray[mid];
  }
}

function mergeSortedArrays(nums1, nums2) {
  const mergedArray = [];
  let i = 0, j = 0;
  
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      mergedArray.push(nums1[i]);
      i++;
    } else {
      mergedArray.push(nums2[j]);
      j++;
    }
  }
  
  while (i < nums1.length) {
    mergedArray.push(nums1[i]);
    i++;
  }
  
  while (j < nums2.length) {
    mergedArray.push(nums2[j]);
    j++;
  }
  
  return mergedArray;
}

// Example usage:
const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6];
const median = findMedianSortedArrays(nums1, nums2);
console.log(median); // Output: 3.5
