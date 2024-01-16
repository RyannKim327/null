function findKthSmallest(array, k) {
  // Sort the array in ascending order
  array.sort((a, b) => a - b);

  // Return the kth smallest element
  return array[k - 1];
}

const array = [5, 3, 8, 2, 9, 1];
const k = 3;

console.log(findKthSmallest(array, k));  // Output: 3
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  extractMin() {
    const minValue = this.heap[0];

    // Move the last element to the root and remove it from the heap
    const lastValue = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = lastValue;
      this.bubbleDown(0);
    }

    return minValue;
  }

  bubbleUp(index) {
    const value = this.heap[index];

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parentValue = this.heap[parentIndex];

      if (value >= parentValue) {
        break;
      }

      this.heap[parentIndex] = value;
      this.heap[index] = parentValue;
      index = parentIndex;
    }
  }

  bubbleDown(index) {
    const length = this.heap.length;
    const value = this.heap[index];

    while (true) {
      let leftChildIndex = index * 2 + 1;
      let rightChildIndex = index * 2 + 2;
      let leftChildValue, rightChildValue;
      let swapIndex = null;

      if (leftChildIndex < length) {
        leftChildValue = this.heap[leftChildIndex];
        if (leftChildValue < value) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChildValue = this.heap[rightChildIndex];
        if (
          (swapIndex === null && rightChildValue < value) ||
          (swapIndex !== null && rightChildValue < leftChildValue)
        ) {
          swapIndex = rightChildIndex;
        }
      }

      if (swapIndex === null) {
        break;
      }

      this.heap[index] = this.heap[swapIndex];
      this.heap[swapIndex] = value;
      index = swapIndex;
    }
  }
}

function findKthSmallest(array, k) {
  const minHeap = new MinHeap();

  // Insert all elements into the min-heap
  array.forEach((element) => minHeap.insert(element));

  // Extract the kth smallest element
  for (let i = 0; i < k - 1; i++) {
    minHeap.extractMin();
  }

  return minHeap.extractMin();
}

const array = [5, 3, 8, 2, 9, 1];
const k = 3;

console.log(findKthSmallest(array, k));  // Output: 3
