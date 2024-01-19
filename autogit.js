function findMedianSortedArrays(nums1, nums2) {
  const mergedArray = nums1.concat(nums2);
  mergedArray.sort((a, b) => a - b);
  
  const len = mergedArray.length;
  const mid = Math.floor(len / 2);

  if (len % 2 === 0) {
    return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
  } else {
    return mergedArray[mid];
  }
}
const nums1 = [1, 3];
const nums2 = [2, 4];

console.log(findMedianSortedArrays(nums1, nums2));  // Output: 2.5
