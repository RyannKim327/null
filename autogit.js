function findKthSmallestElement(arr, k) {
  if (k < 1 || k > arr.length) {
    return undefined;
  }
  
  // Helper function to swap elements in the array
  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  // Helper function to partition the array
  function partition(arr, left, right) {
    const pivot = arr[right];
    let i = left;
    
    for (let j = left; j < right; j++) {
      if (arr[j] <= pivot) {
        swap(arr, i, j);
        i++;
      }
    }
    
    swap(arr, i, right);
    return i;
  }
  
  function quickSelect(arr, left, right, k) {
    if (left === right) {
      return arr[left];
    }
    
    const pivotIndex = partition(arr, left, right);
    
    if (k === pivotIndex) {
      return arr[k];
    } else if (k < pivotIndex) {
      return quickSelect(arr, left, pivotIndex - 1, k);
    } else {
      return quickSelect(arr, pivotIndex + 1, right, k);
    }
  }
  
  return quickSelect(arr, 0, arr.length - 1, k - 1);
}

// Example usage
const array = [7, 10, 4, 3, 20, 15];
const k = 3;
const kthSmallest = findKthSmallestElement(array, k);

console.log(`The ${k}th smallest element is: ${kthSmallest}`);
