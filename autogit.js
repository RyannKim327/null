function findKthSmallest(arr, k) {
  if (arr.length < k || k <= 0) {
    return null;
  }
  
  // Modified quicksort algorithm to find the kth smallest element
  function quickselect(arr, left, right, k) {
    if (left === right) {
      return arr[left];
    }
    
    var pivotIndex = partition(arr, left, right);
    
    if (k === pivotIndex) {
      return arr[k];
    } else if (k < pivotIndex) {
      return quickselect(arr, left, pivotIndex - 1, k);
    } else {
      return quickselect(arr, pivotIndex + 1, right, k);
    }
  }
  
  // Helper function for partitioning the array
  function partition(arr, left, right) {
    var pivotValue = arr[right];
    var i = left;
    
    for (var j = left; j < right; j++) {
      if (arr[j] < pivotValue) {
        swap(arr, i, j);
        i++;
      }
    }
    
    swap(arr, i, right);
    return i;
  }

  // Helper function for swapping array elements
  function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  // Call quickselect to find the kth smallest element
  return quickselect(arr, 0, arr.length - 1, k - 1);
}

// Example usage
var arr = [7, 10, 4, 3, 20, 15];
var k = 3;
var kthSmallest = findKthSmallest(arr, k);
console.log(kthSmallest);  // Output: 7
