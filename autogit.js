class BinaryHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  enqueue(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const minValue = this.heap[0];
    const lastValue = this.heap.pop();
    if (!this.isEmpty()) {
      this.heap[0] = lastValue;
      this.heapifyDown();
    }
    return minValue;
  }

  heapifyUp() {
    let currentIndex = this.size() - 1;
    while (currentIndex > 0) {
      const parentIndex = this.getParentIndex(currentIndex);
      if (this.heap[currentIndex] < this.heap[parentIndex]) {
        [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    let currentIndex = 0;
    while (this.getLeftChildIndex(currentIndex) < this.size()) {
      const leftChildIndex = this.getLeftChildIndex(currentIndex);
      const rightChildIndex = this.getRightChildIndex(currentIndex);
      let smallerChildIndex = leftChildIndex;
      if (rightChildIndex < this.size() && this.heap[rightChildIndex] < this.heap[leftChildIndex]) {
        smallerChildIndex = rightChildIndex;
      }
      if (this.heap[currentIndex] > this.heap[smallerChildIndex]) {
        [this.heap[currentIndex], this.heap[smallerChildIndex]] = [this.heap[smallerChildIndex], this.heap[currentIndex]];
        currentIndex = smallerChildIndex;
      } else {
        break;
      }
    }
  }
}

// Example usage
const pq = new BinaryHeap();
pq.enqueue(5);
pq.enqueue(3);
pq.enqueue(8);
pq.enqueue(1);

console.log(pq.dequeue()); // Output: 1
console.log(pq.dequeue()); // Output: 3
