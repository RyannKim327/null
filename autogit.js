function findMedianSortedArrays(arr1, arr2) {
  const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
  const length = mergedArray.length;
  
  if (length % 2 === 1) {
    return mergedArray[Math.floor(length / 2)];
  } else {
    const midIndex = length / 2;
    return (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2;
  }
}

// Example usage:
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
  
console.log(findMedianSortedArrays(arr1, arr2)); // Output: 3.5
