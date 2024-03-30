class PriorityQueue {
  constructor() {
    this.heap = [null];
  }

  // Helper functions to maintain the heap property
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  getParentIndex(childIndex) {
    return Math.floor(childIndex / 2);
  }

  getLeftChildIndex(parentIndex) {
    return parentIndex * 2;
  }

  getRightChildIndex(parentIndex) {
    return parentIndex * 2 + 1;
  }

  // Main functions for heap operations
  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 1 && this.heap[currentIndex] < this.heap[this.getParentIndex(currentIndex)]) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  pop() {
    if (this.heap.length === 1) {
      return null;
    }

    if (this.heap.length === 2) {
      return this.heap.pop();
    }

    const minValue = this.heap[1];
    this.heap[1] = this.heap.pop();
    let currentIndex = 1;

    while (true) {
      let smallest = currentIndex;
      const leftChildIndex = this.getLeftChildIndex(currentIndex);
      const rightChildIndex = this.getRightChildIndex(currentIndex);

      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]) {
        smallest = leftChildIndex;
      }

      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
        smallest = rightChildIndex;
      }

      if (smallest === currentIndex) {
        break;
      }

      this.swap(currentIndex, smallest);
      currentIndex = smallest;
    }

    return minValue;
  }

  peek() {
    return this.heap[1];
  }

  size() {
    return this.heap.length - 1;
  }

  isEmpty() {
    return this.size() === 0;
  }
}

// Example usage:
const pq = new PriorityQueue();
pq.push(3);
pq.push(1);
pq.push(4);
pq.push(1);

console.log(pq.pop()); // Output: 1
console.log(pq.pop()); // Output: 1
console.log(pq.pop()); // Output: 3
console.log(pq.pop()); // Output: 4
