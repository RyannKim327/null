class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  insert(value, priority) {
    const node = { value, priority };
    this.heap.push(node);
    this.bubbleUp(this.heap.length - 1);
  }

  remove() {
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown(0);
    }
    return min;
  }

  bubbleUp(index) {
    const node = this.heap[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];
      if (node.priority >= parent.priority) break;
      this.heap[parentIndex] = node;
      this.heap[index] = parent;
      index = parentIndex;
    }
  }

  sinkDown(index) {
    const length = this.heap.length;
    const node = this.heap[index];
    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild.priority < node.priority) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild.priority < node.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      this.heap[swap] = node;
      index = swap;
    }
  }
}

// Example usage
const pq = new PriorityQueue();
pq.insert('task1', 3);
pq.insert('task2', 1);
pq.insert('task3', 2);
pq.insert('task4', 4);

console.log(pq.remove()); // { value: 'task2', priority: 1 }
console.log(pq.remove()); // { value: 'task3', priority: 2 }
console.log(pq.remove()); // { value: 'task1', priority: 3 }
console.log(pq.remove()); // { value: 'task4', priority: 4 }
