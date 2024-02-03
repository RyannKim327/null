class BinaryHeap {
  constructor() {
    this.heap = [];
  }

  // other methods will be implemented here
}
class BinaryHeap {
  // ...

  insert(element) {
    this.heap.push(element);
    this.bubbleUp(this.heap.length - 1);
  }
  
  bubbleUp(index) {
    const element = this.heap[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];
      if (element >= parent) break;
      this.heap[parentIndex] = element;
      this.heap[index] = parent;
      index = parentIndex;
    }
  }

  // ...
}
class BinaryHeap {
  // ...

  extractMin() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
  
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkDown(0);
  
    return min;
  }
  
  sinkDown(index) {
    const length = this.heap.length;
    const element = this.heap[index];
  
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let swapIndex = null;
  
      if (leftChildIndex < length) {
        const leftChild = this.heap[leftChildIndex];
        if (leftChild < element) {
          swapIndex = leftChildIndex;
        }
      }
  
      if (rightChildIndex < length) {
        const rightChild = this.heap[rightChildIndex];
        if (
          (swapIndex === null && rightChild < element) ||
          (swapIndex !== null && rightChild < this.heap[swapIndex])
        ) {
          swapIndex = rightChildIndex;
        }
      }
  
      if (swapIndex === null) break;
  
      this.heap[index] = this.heap[swapIndex];
      this.heap[swapIndex] = element;
      index = swapIndex;
    }
  }

  // ...
}
const pq = new BinaryHeap();
pq.insert(5);
pq.insert(1);
pq.insert(10);

console.log(pq.extractMin()); // Output: 1
console.log(pq.extractMin()); // Output: 5
console.log(pq.extractMin()); // Output: 10
console.log(pq.extractMin()); // Output: null
