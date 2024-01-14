function findMedianSortedArrays(arr1, arr2) {
  const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
  const n = mergedArray.length;

  if (n % 2 === 1) {
    return mergedArray[Math.floor(n / 2)];
  } else {
    const midIndex = n / 2;
    const median = (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2;
    return median;
  }
}

// Example usage:
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
console.log(findMedianSortedArrays(arr1, arr2));  // Output: 3.5
