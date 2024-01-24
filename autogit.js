function findKthSmallestElement(arr, k) {
  arr.sort((a, b) => a - b);
  return arr[k - 1];
}

const array = [3, 1, 7, 4, 2, 9, 6, 5, 8];
const k = 3;

const kthSmallest = findKthSmallestElement(array, k);
console.log(kthSmallest); // Output: 3
function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

function quickSelect(arr, low, high, k) {
  const pivotIndex = partition(arr, low, high);

  if (pivotIndex === k - 1) {
    return arr[pivotIndex];
  } else if (pivotIndex > k - 1) {
    return quickSelect(arr, low, pivotIndex - 1, k);
  } else {
    return quickSelect(arr, pivotIndex + 1, high, k);
  }
}

function findKthSmallestElement(arr, k) {
  return quickSelect(arr, 0, arr.length - 1, k);
}

const array = [3, 1, 7, 4, 2, 9, 6, 5, 8];
const k = 3;

const kthSmallest = findKthSmallestElement(array, k);
console.log(kthSmallest); // Output: 3
