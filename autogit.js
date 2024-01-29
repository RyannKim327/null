function findKthSmallest(array, k) {
  // Sort the array
  const sortedArray = array.sort((a, b) => a - b);

  // Return the kth smallest element
  return sortedArray[k - 1];
}
function findKthSmallest(array, k) {
  // Create a MinHeap
  class BinaryHeap {
    constructor() {
      this.heap = [];
    }

    insert(value) {
      this.heap.push(value);
      this.bubbleUp();
    }

    extractMin() {
      const min = this.heap[0];
      const last = this.heap.pop();
      if (this.heap.length > 0) {
        this.heap[0] = last;
        this.sinkDown();
      }
      return min;
    }

    bubbleUp() {
      let index = this.heap.length - 1;
      while (index > 0) {
        let element = this.heap[index],
          parentIndex = Math.floor((index - 1) / 2),
          parent = this.heap[parentIndex];
        if (parent <= element) break;
        this.heap[index] = parent;
        this.heap[parentIndex] = element;
        index = parentIndex;
      }
    }

    sinkDown() {
      let index = 0;
      const length = this.heap.length,
        element = this.heap[0];
      while (true) {
        let leftChildIndex = 2 * index + 1,
          rightChildIndex = 2 * index + 2,
          leftChild,
          rightChild,
          swap = null;

        if (leftChildIndex < length) {
          leftChild = this.heap[leftChildIndex];
          if (leftChild < element) swap = leftChildIndex;
        }

        if (rightChildIndex < length) {
          rightChild = this.heap[rightChildIndex];
          if (
            (swap === null && rightChild < element) ||
            (swap !== null && rightChild < leftChild)
          )
            swap = rightChildIndex;
        }

        if (swap === null) break;
        this.heap[index] = this.heap[swap];
        this.heap[swap] = element;
        index = swap;
      }
    }
  }

  // Create a MinHeap and insert array elements
  const heap = new BinaryHeap();
  array.forEach((elem) => heap.insert(elem));

  // Extract the minimum element k times
  let result;
  for (let i = 0; i < k; i++) {
    result = heap.extractMin();
  }

  // Return the kth smallest element
  return result;
}
function findKthSmallest(array, k) {
  // Quickselect algorithm
  function quickselect(arr, left, right, k) {
    if (left === right) return arr[left];
    let pivotIndex = partition(arr, left, right); // Get the pivot index

    if (k === pivotIndex) {
      return arr[k];
    } else if (k < pivotIndex) {
      return quickselect(arr, left, pivotIndex - 1, k);
    } else {
      return quickselect(arr, pivotIndex + 1, right, k);
    }
  }

  // Partition the array using the Lomuto partition scheme
  function partition(arr, left, right) {
    let pivot = arr[right]; // Choose the rightmost element as pivot
    let i = left;
    for (let j = left; j <= right - 1; j++) {
      if (arr[j] <= pivot) {
        // Swap arr[i] and arr[j]
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
      }
    }
    // Swap arr[i] and arr[right]
    [arr[i], arr[right]] = [arr[right], arr[i]];
    return i; // Return the pivot position
  }

  // Call the quickselect function
  return quickselect(array, 0, array.length - 1, k - 1);
}
