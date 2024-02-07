function findKthSmallest(array, k) {
  const sortedArray = array.sort((a, b) => a - b);
  return sortedArray[k - 1];
}
function findKthSmallest(array, k) {
  const minHeap = new MinHeap(array);
  
  for (let i = 1; i < k; i++) {
    minHeap.extractMin();
  }
  
  return minHeap.extractMin();
}

// MinHeap implementation (can be created separately)
class MinHeap {
  constructor(array) {
    this.heap = [];
    this.buildHeap(array);
  }

  buildHeap(array) {
    for (let i = 0; i < array.length; i++) {
      this.insert(array[i]);
    }
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  extractMin() {
    [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]];
    const min = this.heap.pop();
    this.heapifyDown();
    return min;
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    while (currentIndex > 0 && this.heap[currentIndex] < this.heap[parentIndex]) {
      [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  heapifyDown() {
    let currentIndex = 0;
    let leftChildIndex = 1;
    let rightChildIndex = 2;

    while (
      (this.heap[leftChildIndex] !== undefined && this.heap[currentIndex] > this.heap[leftChildIndex]) ||
      (this.heap[rightChildIndex] !== undefined && this.heap[currentIndex] > this.heap[rightChildIndex])
    ) {
      if (
        this.heap[rightChildIndex] !== undefined &&
        this.heap[rightChildIndex] < this.heap[leftChildIndex]
      ) {
        [this.heap[currentIndex], this.heap[rightChildIndex]] = [this.heap[rightChildIndex], this.heap[currentIndex]];
        currentIndex = rightChildIndex;
      } else {
        [this.heap[currentIndex], this.heap[leftChildIndex]] = [this.heap[leftChildIndex], this.heap[currentIndex]];
        currentIndex = leftChildIndex;
      }

      leftChildIndex = currentIndex * 2 + 1;
      rightChildIndex = currentIndex * 2 + 2;
    }
  }
}
