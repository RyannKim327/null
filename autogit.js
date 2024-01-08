function mergeSort(array) {
  if (array.length <= 1) {
    return array; // Base case: already sorted
  }

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle); // Split array into two halves
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right)); // Recursively merge subarrays
}
function merge(left, right) {
  const result = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Concatenate remaining elements from either left or right
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
const arr = [8, 4, 2, 9, 3, 1, 5, 7, 6];
const sortedArray = mergeSort(arr);
console.log(sortedArray);
[1, 2, 3, 4, 5, 6, 7, 8, 9]
