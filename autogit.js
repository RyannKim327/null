function mergeSortIterative(arr) {
  const n = arr.length;
  const aux = Array(n);
  
  for (let size = 1; size < n; size *= 2) {
    for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * size) {
      const mid = Math.min(leftStart + size - 1, n - 1);
      const rightEnd = Math.min(leftStart + 2 * size - 1, n - 1);
      merge(arr, aux, leftStart, mid, rightEnd);
    }
  }
  
  return arr;
}

function merge(arr, aux, leftStart, mid, rightEnd) {
  let left = leftStart;
  let right = mid + 1;
  let auxIdx = leftStart;
  
  while (left <= mid && right <= rightEnd) {
    if (arr[left] <= arr[right]) {
      aux[auxIdx] = arr[left];
      left++;
    } else {
      aux[auxIdx] = arr[right];
      right++;
    }
    auxIdx++;
  }
  
  while (left <= mid) {
    aux[auxIdx] = arr[left];
    auxIdx++;
    left++;
  }
  
  while (right <= rightEnd) {
    aux[auxIdx] = arr[right];
    auxIdx++;
    right++;
  }
  
  for (let i = leftStart; i <= rightEnd; i++) {
    arr[i] = aux[i];
  }
}

// Example usage
const arr = [5, 8, 2, 4, 1, 3];
console.log(mergeSortIterative(arr)); // Output: [1, 2, 3, 4, 5, 8]
