class BinaryHeap {
  constructor() {
    this.heap = [];
  }

  enqueue(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
    const parentIndex = Math.floor((index - 1) / 2);

    if (parentIndex >= 0 && this.heap[parentIndex] > this.heap[index]) {
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      this.bubbleUp(parentIndex);
    }
  }

  dequeue() {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const minValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown(0);

    return minValue;
  }

  bubbleDown(index) {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let minIndex = index;

    if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[minIndex]) {
      minIndex = leftChildIndex;
    }

    if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[minIndex]) {
      minIndex = rightChildIndex;
    }

    if (minIndex !== index) {
      [this.heap[minIndex], this.heap[index]] = [this.heap[index], this.heap[minIndex]];
      this.bubbleDown(minIndex);
    }
  }
}

// Test the priority queue implementation
const priorityQueue = new BinaryHeap();
priorityQueue.enqueue(5);
priorityQueue.enqueue(2);
priorityQueue.enqueue(10);
priorityQueue.enqueue(1);

console.log(priorityQueue.dequeue()); // Output: 1
console.log(priorityQueue.dequeue()); // Output: 2
console.log(priorityQueue.dequeue()); // Output: 5
console.log(priorityQueue.dequeue()); // Output: 10
console.log(priorityQueue.dequeue()); // Output: null
