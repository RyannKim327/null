function mergeSort(array) {
  // Implementation goes here
}
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  
  // Continue with the merge sort implementation
}
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  
  // Continue with the merge sort implementation
}
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  
  // Continue with the merge sort implementation
}
function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  
  // Copy remaining elements from left array
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  
  // Copy remaining elements from right array
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }
  
  return result;
}
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  
  return merge(sortedLeft, sortedRight);
}
const unsortedArray = [5, 2, 9, 1, 3];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);  // Output: [1, 2, 3, 5, 9]
