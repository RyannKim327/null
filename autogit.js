function findKthSmallestElement(arr, k) {
  if (k < 1 || k > arr.length) {
    return null;
  }
  
  return quickSelect(arr, 0, arr.length - 1, k - 1);
}

function quickSelect(arr, start, end, k) {
  if (start === end) { // base case: only one element in the array
    return arr[start];
  }
  
  const pivotIndex = partition(arr, start, end);
  
  if (k === pivotIndex) { // found kth smallest element
    return arr[k];
  } else if (k < pivotIndex) { // search in the left partition
    return quickSelect(arr, start, pivotIndex - 1, k);
  } else { // search in the right partition
    return quickSelect(arr, pivotIndex + 1, end, k);
  }
}

function partition(arr, start, end) {
  const pivotValue = arr[end]; // select last element as pivot
  let i = start;

  for (let j = start; j < end; j++) {
    if (arr[j] < pivotValue) {
      swap(arr, i, j);
      i++;
    }
  }
  
  swap(arr, i, end);

  return i;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
const array = [5, 3, 8, 2, 9, 1];
const kthSmallest = findKthSmallestElement(array, 3);
console.log(kthSmallest); // Output: 3
