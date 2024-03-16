class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  enqueue(value, priority) {
    const node = { value, priority };
    this.heap.push(node);
    this.bubbleUp(this.heap.length - 1);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const minNode = this.heap[0];
    const lastNode = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = lastNode;
      this.bubbleDown(0);
    }
    
    return minNode.value;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index].priority < this.heap[parentIndex].priority) {
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  bubbleDown(index) {
    while (index < this.heap.length) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let nextIndex = index;

      if (leftChildIndex < this.heap.length && this.heap[leftChildIndex].priority < this.heap[nextIndex].priority) {
        nextIndex = leftChildIndex;
      }

      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].priority < this.heap[nextIndex].priority) {
        nextIndex = rightChildIndex;
      }

      if (nextIndex !== index) {
        [this.heap[index], this.heap[nextIndex]] = [this.heap[nextIndex], this.heap[index]];
        index = nextIndex;
      } else {
        break;
      }
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

// Usage
const pq = new PriorityQueue();
pq.enqueue('task1', 3);
pq.enqueue('task2', 1);
pq.enqueue('task3', 2);

console.log(pq.dequeue()); // task2
console.log(pq.dequeue()); // task3
console.log(pq.dequeue()); // task1
