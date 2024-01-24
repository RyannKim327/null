function compareNumbers(a, b) {
  return a - b;
}

combinedArray.sort(compareNumbers);
function findMedianSortedArrays(arr1, arr2) {
  let combinedArray = arr1.concat(arr2);
  combinedArray.sort((a, b) => a - b);

  const length = combinedArray.length;
  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    return (combinedArray[middleIndex] + combinedArray[middleIndex - 1]) / 2;
  } else {
    return combinedArray[middleIndex];
  }
}

// Example usage:
const nums1 = [1, 3];
const nums2 = [2, 4];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.5
