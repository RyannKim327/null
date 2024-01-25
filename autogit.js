function heapSort(arr) {
  // Build Max Heap
  function buildHeap(arr) {
    const len = arr.length;
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
      heapify(arr, len, i);
    }
  }

  // Heapify a subtree rooted with index i
  function heapify(arr, len, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < len && arr[left] > arr[largest]) {
      largest = left;
    }

    if (right < len && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, len, largest);
    }
  }

  // Perform Heap Sort
  const len = arr.length;
  buildHeap(arr);
  for (let i = len - 1; i >= 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }

  return arr;
}

// Example usage:
const array = [7, 2, 9, 1, 6, 5, 3];
console.log(heapSort(array)); // [1, 2, 3, 5, 6, 7, 9]
