class PriorityQueue {
  constructor() {
    this.heap = [];
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

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }

  insert(value, priority) {
    const node = { value, priority };
    this.heap.push(node);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex].priority > this.heap[index].priority) {
        break;
      }
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  extractMax() {
    if (this.heap.length === 0) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return max;
  }

  heapifyDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let childIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      if (rightChildIndex < this.heap.length && this.heap[rightChildIndex].priority > this.heap[childIndex].priority) {
        childIndex = rightChildIndex;
      }
      if (this.heap[index].priority >= this.heap[childIndex].priority) {
        break;
      }
      this.swap(index, childIndex);
      index = childIndex;
    }
  }
}

// Example usage
const pq = new PriorityQueue();
pq.insert('task1', 3);
pq.insert('task2', 5);
pq.insert('task3', 1);

console.log(pq.extractMax()); // Output: { value: 'task2', priority: 5 }
console.log(pq.extractMax()); // Output: { value: 'task1', priority: 3 }
console.log(pq.extractMax()); // Output: { value: 'task3', priority: 1 }
console.log(pq.extractMax()); // Output: null
