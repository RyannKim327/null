function mergeArrays(arr1, arr2) {
  let result = [];
  let i = 0; // Pointer for arr1
  let j = 0; // Pointer for arr2
  
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  
  // Add any remaining elements from arr1
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  
  // Add any remaining elements from arr2
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  
  return result;
}
function findMedian(arr) {
  const n = arr.length;
  const mid = Math.floor(n / 2);
  
  if (n % 2 === 0) {
    return (arr[mid - 1] + arr[mid]) / 2;
  } else {
    return arr[mid];
  }
}
const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6];
const mergedArray = mergeArrays(nums1, nums2);
const median = findMedian(mergedArray);

console.log(mergedArray); // [1, 2, 3, 4, 5, 6]
console.log(median); // 3.5
