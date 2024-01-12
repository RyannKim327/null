function findMedianSortedArrays(nums1, nums2) {
  // Merge the two arrays into one sorted array
  const mergedArray = mergeSortedArrays(nums1, nums2);

  // Find the median of the merged array
  const length = mergedArray.length;
  const mid = Math.floor(length / 2);

  if (length % 2 === 0) {
    // If the merged array length is even, average the middle two elements
    return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
  } else {
    // If the merged array length is odd, return the middle element
    return mergedArray[mid];
  }
}

function mergeSortedArrays(nums1, nums2) {
  const mergedArray = [];
  let i = 0; // Pointer for nums1
  let j = 0; // Pointer for nums2

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      mergedArray.push(nums1[i]);
      i++;
    } else {
      mergedArray.push(nums2[j]);
      j++;
    }
  }

  // Copy the remaining elements from nums1, if any
  while (i < nums1.length) {
    mergedArray.push(nums1[i]);
    i++;
  }

  // Copy the remaining elements from nums2, if any
  while (j < nums2.length) {
    mergedArray.push(nums2[j]);
    j++;
  }

  return mergedArray;
}
const nums1 = [1, 3];
const nums2 = [2, 4];

const median = findMedianSortedArrays(nums1, nums2);
console.log(median); // Output: 2.5
