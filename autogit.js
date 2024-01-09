function findMedianSortedArrays(nums1, nums2) {
  const merged = nums1.concat(nums2).sort((a, b) => a - b);
  const length = merged.length;
  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 1) {
    return merged[middleIndex];
  } else {
    return average(merged[middleIndex - 1], merged[middleIndex]);
  }
}

function average(a, b) {
  return (a + b) / 2;
}

// Test the function
const nums1 = [1, 3];
const nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2

const nums3 = [1, 2];
const nums4 = [3, 4];
console.log(findMedianSortedArrays(nums3, nums4)); // Output: 2.5
