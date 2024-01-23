function findKthSmallest(arr, k) {
  arr.sort((a, b) => a - b);
  return arr[k - 1];
}
function findKthSmallest(arr, k) {
  function partition(arr, left, right) {
    const pivot = arr[Math.floor((left + right) / 2)];
    while (left <= right) {
      while (arr[left] < pivot) {
        left++;
      }
      while (arr[right] > pivot) {
        right--;
      }
      if (left <= right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
      }
    }
    return left;
  }

  function quickSelect(arr, left, right, k) {
    const index = partition(arr, left, right);
    if (left < index - 1 && k < index) {
      return quickSelect(arr, left, index - 1, k);
    } else if (index < right && k >= index) {
      return quickSelect(arr, index, right, k);
    } else {
      return arr[k - 1];
    }
  }

  return quickSelect(arr, 0, arr.length - 1, k);
}
const arr = [7, 2, 9, 1, 5, 8];
const k = 3;
const kthSmallest = findKthSmallest(arr, k);
console.log(kthSmallest); // Output: 5
