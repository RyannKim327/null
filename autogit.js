const mergeSortedArrays = (arr1, arr2) => {
  return [...arr1, ...arr2].sort((a, b) => a - b);
};
const findMedianSortedArrays = (nums1, nums2) => {
  const mergedArray = mergeSortedArrays(nums1, nums2);
  const length = mergedArray.length;
};
  if (length % 2 === 1) {
    return mergedArray[Math.floor(length / 2)];
  } else {
    const mid = length / 2;
    return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
  }
};
const mergeSortedArrays = (arr1, arr2) => {
  return [...arr1, ...arr2].sort((a, b) => a - b);
};

const findMedianSortedArrays = (nums1, nums2) => {
  const mergedArray = mergeSortedArrays(nums1, nums2);
  const length = mergedArray.length;

  if (length % 2 === 1) {
    return mergedArray[Math.floor(length / 2)];
  } else {
    const mid = length / 2;
    return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
  }
};

// Usage example:
const nums1 = [1, 3];
const nums2 = [2, 4];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.5
