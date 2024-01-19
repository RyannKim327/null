function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

function quicksort(arr, low, high) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quicksort(arr, low, pivotIndex - 1);
    quicksort(arr, pivotIndex + 1, high);
  }
}

function findKthSmallest(arr, k) {
  const len = arr.length;
  
  if (k >= 1 && k <= len) {
    quicksort(arr, 0, len - 1);
    return arr[k - 1];
  }
  
  return null;
}

// Example usage:
const array = [7, 2, 9, 1, 5, 8];
const k = 3;

const kthSmallest = findKthSmallest(array, k);
console.log(`The ${k}th smallest element is: ${kthSmallest}`);
