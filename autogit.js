function findMedianSortedArrays(arr1, arr2) {
  const mergedArray = arr1.concat(arr2);
  const sortedArray = mergedArray.sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedArray.length / 2);

  if (sortedArray.length % 2 === 1) {
    return sortedArray[middleIndex];
  } else {
    return (sortedArray[middleIndex] + sortedArray[middleIndex - 1]) / 2;
  }
}

// Example usage:
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

console.log(findMedianSortedArrays(arr1, arr2)); // Output: 3.5
