function merge(left, right) {
  let mergedArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from each array and add the smallest one to the result
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      mergedArr.push(left[leftIndex]);
      leftIndex++;
    } else {
      mergedArr.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Add remaining elements from the left array
  while (leftIndex < left.length) {
    mergedArr.push(left[leftIndex]);
    leftIndex++;
  }

  // Add remaining elements from the right array
  while (rightIndex < right.length) {
    mergedArr.push(right[rightIndex]);
    rightIndex++;
  }

  return mergedArr;
}
function mergeSort(arr) {
  // Base case: If the array has only one element, return it
  if (arr.length <= 1) {
    return arr;
  }

  // Find the middle index of the array
  const middle = Math.floor(arr.length / 2);

  // Split the array into two halves
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  // Recursively sort and merge the two halves
  return merge(mergeSort(left), mergeSort(right));
}
const arr = [5, 3, 8, 4, 2, 1, 6, 7];
const sortedArr = mergeSort(arr);
console.log(sortedArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
