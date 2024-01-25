function findKthSmallest(arr, k) {
  // Clone the array to avoid modifying the original array
  const sortedArr = [...arr];
  
  // Define a helper function to swap elements in the array
  function swap(a, b) {
    const temp = sortedArr[a];
    sortedArr[a] = sortedArr[b];
    sortedArr[b] = temp;
  }
  
  // Partition the array
  function partition(left, right, pivot) {
    const pivotValue = sortedArr[pivot];
    let partitionIndex = left;
    
    for (let i = left; i < right; i++) {
      if (sortedArr[i] < pivotValue) {
        swap(i, partitionIndex);
        partitionIndex++;
      }
    }
    
    swap(right, partitionIndex);
    return partitionIndex;
  }
  
  // Recursive quickselect algorithm
  function quickselect(left, right, k) {
    if (left === right) {
      return sortedArr[left];
    }

    const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
    const partitionIndex = partition(left, right, pivotIndex);
    
    if (k === partitionIndex) {
      return sortedArr[k];
    } else if (k < partitionIndex) {
      return quickselect(left, partitionIndex - 1, k);
    } else {
      return quickselect(partitionIndex + 1, right, k);
    }
  }
  
  // Check if k is within the range of the array
  if (k < 1 || k > sortedArr.length) {
    return "Invalid input";
  }
  
  // Find the kth smallest element
  return quickselect(0, sortedArr.length - 1, k - 1);
}

// Example usage:
const array = [7, 2, 8, 1, 4, 5, 9, 3, 6];
const k = 3;
const kthSmallest = findKthSmallest(array, k);
console.log(`The ${k}th smallest element in the array is: ${kthSmallest}`);
