class MinHeap {
  constructor() {
    this.heap = [];
  }

  enqueue(element) {
    this.heap.push(element);
    this.heapifyUp();
  }

  dequeue() {
    if (this.heap.length === 0) {
      return null;
    }

    const min = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapifyDown();
    }

    return min;
  }

  heapifyUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const element = this.heap[index];
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (parent <= element) {
        break;
      }

      this.heap[parentIndex] = element;
      this.heap[index] = parent;
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;

    while (index < this.heap.length) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallest = index;

      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]) {
        smallest = leftChildIndex;
      }

      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
        smallest = rightChildIndex;
      }

      if (smallest === index) {
        break;
      }

      const temp = this.heap[index];
      this.heap[index] = this.heap[smallest];
      this.heap[smallest] = temp;

      index = smallest;
    }
  }

  peek() {
    return this.heap[0];
  }
}

// Priority Queue implementation using a MinHeap
class PriorityQueue {
  constructor() {
    this.minHeap = new MinHeap();
  }

  enqueue(element) {
    this.minHeap.enqueue(element);
  }

  dequeue() {
    return this.minHeap.dequeue();
  }

  peek() {
    return this.minHeap.peek();
  }

  isEmpty() {
    return this.minHeap.heap.length === 0;
  }
}

// Example usage:
const pq = new PriorityQueue();
pq.enqueue(3);
pq.enqueue(2);
pq.enqueue(5);
pq.enqueue(1);

console.log(pq.dequeue());  // Output: 1
console.log(pq.dequeue());  // Output: 2
console.log(pq.dequeue());  // Output: 3
console.log(pq.dequeue());  // Output: 5
