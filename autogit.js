function mergeArrays(arr1, arr2) {
  const merged = [];
  let i = 0;
  let j = 0;

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
function findMedianSortedArrays(nums1, nums2) {
  const merged = mergeArrays(nums1, nums2);
  const len = merged.length;

  if (len % 2 === 1) {
    return merged[Math.floor(len / 2)];
  } else {
    const mid = len / 2;
    return (merged[mid - 1] + merged[mid]) / 2;
  }
}
const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6];

const median = findMedianSortedArrays(nums1, nums2);
console.log(median); // Output: 3.5
