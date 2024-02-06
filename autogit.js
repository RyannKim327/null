let mergedArray = array1.concat(array2);
mergedArray.sort((a, b) => a - b);
let length = mergedArray.length;
let median;
if (length % 2 === 1) {
  median = mergedArray[Math.floor(length / 2)];
} else {
  let midIndex = length / 2;
  median = (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2;
}
function findMedian(array1, array2) {
  let mergedArray = array1.concat(array2);
  mergedArray.sort((a, b) => a - b);

  let length = mergedArray.length;
  let median;
  if (length % 2 === 1) {
    median = mergedArray[Math.floor(length / 2)];
  } else {
    let midIndex = length / 2;
    median = (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2;
  }

  return median;
}

// Example usage
let array1 = [1, 3, 5];
let array2 = [2, 4, 6];
let median = findMedian(array1, array2);
console.log(median); // Output: 3.5
