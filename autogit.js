class BinaryHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  extractMin() {
    if (this.heap.length === 0) {
      return null;
    }

    const minValue = this.heap[0];
    const lastIndex = this.heap.length - 1;
    this.heap[0] = this.heap[lastIndex];
    this.heap.pop();
    this.heapifyDown();

    return minValue;
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
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
    while (true) {
      let leftChildIndex = 2 * currentIndex + 1;
      let rightChildIndex = 2 * currentIndex + 2;
      let smallestChildIndex = currentIndex;

      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestChildIndex]) {
        smallestChildIndex = leftChildIndex;
      }

      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestChildIndex]) {
        smallestChildIndex = rightChildIndex;
      }

      if (smallestChildIndex !== currentIndex) {
        [this.heap[currentIndex], this.heap[smallestChildIndex]] = [this.heap[smallestChildIndex], this.heap[currentIndex]];
        currentIndex = smallestChildIndex;
      } else {
        break;
      }
    }
  }

  peek() {
    if (this.heap.length === 0) {
      return null;
    }

    return this.heap[0];
  }

  getSize() {
    return this.heap.length;
  }
}

// Example usage
const priorityQueue = new BinaryHeap();
priorityQueue.insert(5);
priorityQueue.insert(2);
priorityQueue.insert(10);

console.log(priorityQueue.peek()); // Output: 2
console.log(priorityQueue.getSize()); // Output: 3
console.log(priorityQueue.extractMin()); // Output: 2
console.log(priorityQueue.getSize()); // Output: 2
