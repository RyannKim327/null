function mergeArrays(arr1, arr2) {
  let merged = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
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
    // If the length is even, average the two middle elements
    const mid = n / 2;
    return (nums[mid - 1] + nums[mid]) / 2;
  } else {
    // If the length is odd, return the middle element
    return nums[Math.floor(n / 2)];
  }
}
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

const merged = mergeArrays(arr1, arr2);
const median = findMedian(merged);

console.log(median); // Output: 3.5
