function mergeArrays(arr1, arr2) {
  let merged = [];
  let i = 0, j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
}
function findMedian(nums) {
  const n = nums.length;
  if (n % 2 === 0) {
    const mid = n / 2;
    return (nums[mid - 1] + nums[mid]) / 2;
  } else {
    return nums[Math.floor(n / 2)];
  }
}
function findMedianSortedArrays(nums1, nums2) {
  const merged = mergeArrays(nums1, nums2);
  return findMedian(merged);
}
const nums1 = [1, 3];
const nums2 = [2, 4];
const median = findMedianSortedArrays(nums1, nums2);
console.log(median); // Output: 2.5
