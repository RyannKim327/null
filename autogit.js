function heapSort(array) {
  // Build max heap
  function buildMaxHeap(array) {
    const n = array.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(array, n, i);
    }
  }

  // Heapify the subtree rooted at index i
  function heapify(array, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && array[left] > array[largest]) {
      largest = left;
    }

    if (right < n && array[right] > array[largest]) {
      largest = right;
    }

    if (largest !== i) {
      [array[i], array[largest]] = [array[largest], array[i]];
      heapify(array, n, largest);
    }
  }

  // Perform heap sort
  function sort(array) {
    const n = array.length;

    // Build max heap
    buildMaxHeap(array);

    // Heap sort
    for (let i = n - 1; i >= 0; i--) {
      [array[0], array[i]] = [array[i], array[0]];
      heapify(array, i, 0);
    }
  }

  // Call sort function
  sort(array);
  
  return array;
}

// Example usage
const arr = [7, 4, 1, 9, 3, 6];
console.log(heapSort(arr)); // [1, 3, 4, 6, 7, 9]
