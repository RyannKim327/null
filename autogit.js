function findKthSmallest(arr, k) {
  // Helper function to partition the array
  function partition(arr, left, right) {
    const pivot = arr[Math.floor((left + right) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
      while (arr[i] < pivot) {
        i++;
      }

      while (arr[j] > pivot) {
        j--;
      }

      if (i <= j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
      }
    }

    return i;
  }

  // Recursive function to find the kth smallest element
  function findKthUtil(arr, left, right, k) {
    if (left === right) {
      return arr[left];
    }

    const partitionIndex = partition(arr, left, right);

    if (k === partitionIndex) {
      return arr[k];
    } else if (k < partitionIndex) {
      return findKthUtil(arr, left, partitionIndex - 1, k);
    } else {
      return findKthUtil(arr, partitionIndex, right, k);
    }
  }

  // Call the recursive function
  return findKthUtil(arr, 0, arr.length - 1, k - 1);
}

// Example usage
const array = [4, 2, 7, 1, 5];
const k = 3;
const result = findKthSmallest(array, k);
console.log(`The ${k}th smallest element is: ${result}`);
