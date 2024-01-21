function mergeArrays(arr1, arr2) {
  let merged = [];
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
function findMedian(arr) {
  const n = arr.length;
  const mid = Math.floor(n / 2);

  if (n % 2 === 0) {
    return (arr[mid - 1] + arr[mid]) / 2;
  } else {
    return arr[mid];
  }
}
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

const merged = mergeArrays(arr1, arr2);
const median = findMedian(merged);

console.log(median); // Output: 3.5
