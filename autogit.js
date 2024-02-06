function findMedianSortedArrays(nums1, nums2) {
  const mergedArray = mergeArrays(nums1, nums2);
  const length = mergedArray.length;

  if (length % 2 === 1) {
    return mergedArray[Math.floor(length / 2)];
  } else {
    const middleRight = length / 2;
    const middleLeft = middleRight - 1;
    return (mergedArray[middleLeft] + mergedArray[middleRight]) / 2;
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

// Example usage:
const nums1 = [1, 3];
const nums2 = [2, 4, 6];
const median = findMedianSortedArrays(nums1, nums2);
console.log(median); // Output: 3
