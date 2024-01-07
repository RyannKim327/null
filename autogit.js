function findKthSmallest(arr, k) {
  // Sort the array in ascending order
  const sortedArr = arr.slice().sort((a, b) => a - b);

  // Return the kth smallest element
  return sortedArr[k - 1];
}

// Example usage
const array = [4, 2, 9, 6, 5, 1];
const k = 3;
const result = findKthSmallest(array, k);
console.log(result);  // Output: 4
function partition(arr, left, right) {
  const pivot = arr[right];
  let i = left;

  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  [arr[i], arr[right]] = [arr[right], arr[i]];
  return i;
}

function quickSelect(arr, left, right, k) {
  if (left === right) return arr[left];

  const pivotIndex = partition(arr, left, right);

  if (k === pivotIndex) {
    return arr[pivotIndex];
  } else if (k < pivotIndex) {
    return quickSelect(arr, left, pivotIndex - 1, k);
  } else {
    return quickSelect(arr, pivotIndex + 1, right, k);
  }
}

function findKthSmallest(arr, k) {
  if (k < 1 || k > arr.length) {
    throw new Error('Invalid input');
  }

  return quickSelect(arr, 0, arr.length - 1, k - 1);
}

// Example usage
const array = [4, 2, 9, 6, 5, 1];
const k = 3;
const result = findKthSmallest(array, k);
console.log(result);  // Output: 4
