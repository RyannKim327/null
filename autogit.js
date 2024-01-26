function merge(leftArr, rightArr) {
  let sortedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      sortedArr.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      sortedArr.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }
  
  // Concatenate any remaining elements from the left and right arrays
  return sortedArr.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
}
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr; // Base case: Array is already sorted
  }
  
  const middle = Math.floor(arr.length / 2); // Find the middle index
  const leftArr = arr.slice(0, middle); // Split array into left half
  const rightArr = arr.slice(middle); // Split array into right half
  
  // Recursively sort and merge the two halves
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}
const arr = [5, 2, 8, 3, 1, 6, 4, 7];
const sortedArr = mergeSort(arr);
console.log(sortedArr);
