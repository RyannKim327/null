function findMedianSortedArrays(array1, array2) {
  let combinedArray = array1.concat(array2).sort((a, b) => a - b);
  let length = combinedArray.length;
  let median;
  
  if (length % 2 === 0) {
    median = (combinedArray[length / 2 - 1] + combinedArray[length / 2]) / 2;
  } else {
    median = combinedArray[Math.floor(length / 2)];
  }
  
  return median;
}
