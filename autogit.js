// Merge function to merge the two halves of an array
function merge(left, right) {
  let result = [];
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
  
  // Add the remaining elements from either left or right array
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }
  
  return result;
}

// Merge sort function
function mergeSort(array) {
  if (array.length <= 1) {
    return array; // Array already sorted
  }
  
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  
  return merge(mergeSort(left), mergeSort(right));
}

// Example usage:
const arr = [7, 2, 1, 6, 8, 5, 3, 4];
console.log("Original Array:", arr);
console.log("Sorted Array:", mergeSort(arr));
