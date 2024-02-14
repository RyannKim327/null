const mergedArray = array1.concat(array2);
mergedArray.sort((a, b) => a - b);
const middleIndex = Math.floor(mergedArray.length / 2);
if (mergedArray.length % 2 === 0) {
  // Array has an even number of elements
  const median = (mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2;
  console.log('Median:', median);
} else {
  // Array has an odd number of elements
  const median = mergedArray[middleIndex];
  console.log('Median:', median);
}
function findMedian(array1, array2) {
  const mergedArray = array1.concat(array2);
  mergedArray.sort((a, b) => a - b);
  const middleIndex = Math.floor(mergedArray.length / 2);

  if (mergedArray.length % 2 === 0) {
    return (mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2;
  } else {
    return mergedArray[middleIndex];
  }
}

// Usage
const array1 = [1, 3, 5];
const array2 = [2, 4, 6];

const median = findMedian(array1, array2);
console.log('Median:', median);
