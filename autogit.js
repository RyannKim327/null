const mergedArray = array1.concat(array2).sort((a, b) => a - b);
const length = mergedArray.length;
const middle = Math.floor(length / 2);

if (length % 2 === 0) {
  const median = (mergedArray[middle - 1] + mergedArray[middle]) / 2;
  console.log(median);
} else {
  const median = mergedArray[middle];
  console.log(median);
}
function findMedian(array1, array2) {
  const mergedArray = array1.concat(array2).sort((a, b) => a - b);
  const length = mergedArray.length;
  const middle = Math.floor(length / 2);

  if (length % 2 === 0) {
    const median = (mergedArray[middle - 1] + mergedArray[middle]) / 2;
    return median;
  } else {
    const median = mergedArray[middle];
    return median;
  }
}

const array1 = [1, 3, 5];
const array2 = [2, 4, 6];
console.log(findMedian(array1, array2));
