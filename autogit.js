const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
const medianIdx = Math.floor(mergedArray.length / 2);
const median = mergedArray[medianIdx];
const medianIdx1 = Math.floor(mergedArray.length / 2) - 1;
const medianIdx2 = medianIdx1 + 1;
const median = (mergedArray[medianIdx1] + mergedArray[medianIdx2]) / 2;
function findMedian(arr1, arr2) {
  const mergedArray = [...arr1, ...arr2].sort((a, b) => a - b);
  const medianIdx = Math.floor(mergedArray.length / 2);

  if (mergedArray.length % 2 === 1) {
    return mergedArray[medianIdx];
  } else {
    const medianIdx1 = medianIdx - 1;
    const medianIdx2 = medianIdx;
    return (mergedArray[medianIdx1] + mergedArray[medianIdx2]) / 2;
  }
}
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
const median = findMedian(arr1, arr2);
console.log(median); // Output: 3.5
