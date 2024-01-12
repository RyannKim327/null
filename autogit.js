function binarySearch(searchValue, sortedArray, startIndex = 0, endIndex = sortedArray.length - 1) {
  // ...
}
if (startIndex > endIndex || searchValue < sortedArray[startIndex] || searchValue > sortedArray[endIndex]) {
  return -1;
}
const middleIndex = Math.floor((startIndex + endIndex) / 2);
if (sortedArray[middleIndex] === searchValue) {
  return middleIndex;
}
if (sortedArray[middleIndex] > searchValue) {
  return binarySearch(searchValue, sortedArray, startIndex, middleIndex - 1);
}
if (sortedArray[middleIndex] < searchValue) {
  return binarySearch(searchValue, sortedArray, middleIndex + 1, endIndex);
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(6, arr)); // Output: 5
