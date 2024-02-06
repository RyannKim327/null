function findMedianSortedArrays(arr1, arr2) {
  const merged = [...arr1, ...arr2].sort((a, b) => a - b);
  const length = merged.length;

  if (length % 2 === 1) {
    return merged[Math.floor(length / 2)];
  } else {
    const index1 = Math.floor(length / 2) - 1;
    const index2 = Math.floor(length / 2);
    return (merged[index1] + merged[index2]) / 2;
  }
}

// Example usage:
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
console.log(findMedianSortedArrays(arr1, arr2)); // Output: 3.5
