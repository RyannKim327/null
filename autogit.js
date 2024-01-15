function partition(arr, start, end) {
  const pivot = arr[end];
  let i = start;
  for (let j = start; j < end; j++) {
    if (arr[j] <= pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }
  [arr[i], arr[end]] = [arr[end], arr[i]];
  return i;
}
function findKthSmallest(arr, k, start = 0, end = arr.length - 1) {
  if (k > 0 && k <= end - start + 1) {
    const pivotIndex = partition(arr, start, end);
    if (pivotIndex - start === k - 1) {
      return arr[pivotIndex];
    } else if (pivotIndex - start > k - 1) {
      return findKthSmallest(arr, k, start, pivotIndex - 1);
    } else {
      return findKthSmallest(arr, k - (pivotIndex - start + 1), pivotIndex + 1, end);
    }
  }
  return -1; // kth smallest element doesn't exist
}
const array = [7, 10, 4, 3, 20, 15];
const k = 3;

const kthSmallest = findKthSmallest(array, k);
console.log(`The ${k}th smallest element is: ${kthSmallest}`);
