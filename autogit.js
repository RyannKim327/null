class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  // Insert an element into the priority queue
  insert(element) {
    this.heap.push(element);
    this.bubbleUp(this.heap.length - 1);
  }

  // Remove and return the highest priority element from the queue
  extractMax() {
    const max = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.sinkDown(0);
    }
    return max;
  }

  // Move an element up in the heap to maintain the heap property
  bubbleUp(index) {
    const element = this.heap[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];
      if (element <= parent) {
        break;
      }
      this.heap[parentIndex] = element;
      this.heap[index] = parent;
      index = parentIndex;
    }
  }

  // Move an element down in the heap to maintain the heap property
  sinkDown(index) {
    const length = this.heap.length;
    const element = this.heap[index];
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let swapIndex = null;
      if (leftChildIndex < length) {
        const leftChild = this.heap[leftChildIndex];
        if (leftChild > element) {
          swapIndex = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        const rightChild = this.heap[rightChildIndex];
        if ((swapIndex === null && rightChild > element) ||
            (swapIndex !== null && rightChild > this.heap[swapIndex])) {
          swapIndex = rightChildIndex;
        }
      }
      if (swapIndex === null) {
        break;
      }
      this.heap[index] = this.heap[swapIndex];
      this.heap[swapIndex] = element;
      index = swapIndex;
    }
  }
}
const pq = new PriorityQueue();
pq.insert(5);
pq.insert(10);
pq.insert(3);
console.log(pq.extractMax());  // Output: 10
console.log(pq.extractMax());  // Output: 5
