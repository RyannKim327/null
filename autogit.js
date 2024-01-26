function mergeSort(arr) {
  // Base case: if the array is empty or contains only one element, it is already sorted
  if (arr.length <= 1) {
    return arr;
  }
  
  // Splitting the array in half
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  
  // Recursively sort both halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  
  // Merge the sorted halves
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  
  // Compare elements from both halves and push the smaller one into the result array
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  
  // Push any remaining elements of the left and right halves into the result array
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
const arr = [5, 3, 8, 4, 2, 1, 6, 7];
const sortedArr = mergeSort(arr);
console.log(sortedArr); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
