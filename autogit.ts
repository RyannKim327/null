function findMedianOfTwoSortedArrays(arr1: number[], arr2: number[]): number {
  const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
  const length = mergedArray.length;
  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    // Even length, return the average of the two middle elements
    return (mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2;
  } else {
    // Odd length, return the middle element
    return mergedArray[middleIndex];
  }
}
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

console.log(findMedianOfTwoSortedArrays(arr1, arr2)); // Output: 4
