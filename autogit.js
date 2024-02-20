class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  insert(value, priority) {
    const item = { value, priority };
    this.heap.push(item);
    this.bubbleUp(this.heap.length - 1);
  }

  extractMin() {
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.trickleDown(0);
    }
    return min;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex].priority <= this.heap[index].priority) {
        break;
      }
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  trickleDown(index) {
    while (index < this.heap.length) {
      const leftChild = index * 2 + 1;
      const rightChild = index * 2 + 2;
      let smallest = index;

      if (leftChild < this.heap.length && this.heap[leftChild].priority < this.heap[smallest].priority) {
        smallest = leftChild;
      }

      if (rightChild < this.heap.length && this.heap[rightChild].priority < this.heap[smallest].priority) {
        smallest = rightChild;
      }

      if (smallest === index) {
        break;
      }

      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }
}

// Example Usage
const pq = new PriorityQueue();
pq.insert("Task 1", 3);
pq.insert("Task 2", 1);
pq.insert("Task 3", 2);

console.log(pq.extractMin()); // { value: 'Task 2', priority: 1 }
console.log(pq.extractMin()); // { value: 'Task 3', priority: 2 }
console.log(pq.extractMin()); // { value: 'Task 1', priority: 3 }
